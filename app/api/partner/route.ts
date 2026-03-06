import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

// Initialize Resend with fallback for build time
const resend = new Resend(process.env.RESEND_API_KEY || 'placeholder')

// Validation schema
const partnerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  partnerType: z.enum(['farmer', 'retailer'], {
    errorMap: () => ({ message: 'Please select a partner type' })
  }),
  location: z.string().min(2, 'Location is required'),
  details: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'placeholder') {
      return NextResponse.json(
        { error: 'Email service not configured. Please contact us at info@veginn.rw' },
        { status: 503 }
      )
    }

    const body = await request.json()
    
    // Validate request data
    const validatedData = partnerSchema.parse(body)

    const partnerTypeLabel = validatedData.partnerType === 'farmer' ? '🌱 Farmer' : '🏪 Retailer/Partner'

    // Send notification email to VegInn
    const { data, error } = await resend.emails.send({
      from: 'VegInn Partnership <onboarding@resend.dev>',
      to: 'info@veginn.rw',
      replyTo: validatedData.email,
      subject: `${partnerTypeLabel} Partnership Request from ${validatedData.name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
              .badge { display: inline-block; padding: 8px 16px; background: #10b981; color: white; border-radius: 20px; font-size: 14px; font-weight: bold; margin-bottom: 20px; }
              .info-row { margin: 15px 0; padding: 12px; background: white; border-left: 4px solid #10b981; border-radius: 4px; }
              .label { font-weight: bold; color: #059669; margin-bottom: 5px; }
              .value { color: #1f2937; }
              .details-box { background: white; padding: 15px; border-radius: 8px; margin-top: 20px; border: 1px solid #e5e7eb; }
              .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">🤝 VegInn Partnership</h1>
                <p style="margin: 10px 0 0 0;">New Partnership Request</p>
              </div>
              <div class="content">
                <div class="badge">${partnerTypeLabel}</div>
                <p style="font-size: 16px; margin-bottom: 20px;">You have received a new partnership inquiry!</p>
                
                <div class="info-row">
                  <div class="label">👤 Name:</div>
                  <div class="value">${validatedData.name}</div>
                </div>

                <div class="info-row">
                  <div class="label">📧 Email:</div>
                  <div class="value">${validatedData.email || 'Not provided'}</div>
                </div>

                <div class="info-row">
                  <div class="label">📱 Phone:</div>
                  <div class="value">${validatedData.phone}</div>
                </div>

                <div class="info-row">
                  <div class="label">📍 Location:</div>
                  <div class="value">${validatedData.location}</div>
                </div>

                <div class="info-row">
                  <div class="label">🏷️ Partner Type:</div>
                  <div class="value">${validatedData.partnerType === 'farmer' ? 'Farmer (Supplier)' : 'Retailer/Institutional Buyer'}</div>
                </div>

                <div class="details-box">
                  <div class="label">💬 Additional Details:</div>
                  <p style="margin: 10px 0 0 0; white-space: pre-wrap;">${validatedData.details || 'No additional details provided'}</p>
                </div>

                <div class="info-row">
                  <div class="label">📅 Submitted:</div>
                  <div class="value">${new Date().toLocaleString('en-RW', { timeZone: 'Africa/Kigali' })}</div>
                </div>

                <div class="footer">
                  <p><strong>Action Required:</strong> Please follow up with this partnership inquiry within 24-48 hours.</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error('Email send error:', error)
      return NextResponse.json(
        { error: 'Failed to submit partnership request. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Partnership request submitted successfully!' },
      { status: 200 }
    )

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      )
    }

    console.error('Partner request error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}
