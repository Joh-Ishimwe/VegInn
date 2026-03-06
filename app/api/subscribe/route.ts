import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

// Initialize Resend with fallback for build time
const resend = new Resend(process.env.RESEND_API_KEY || 'placeholder')

// Validation schema
const subscribeSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
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
    const validatedData = subscribeSchema.parse(body)

    // Send notification email to VegInn
    const { data, error } = await resend.emails.send({
      from: 'VegInn Subscriptions <onboarding@resend.dev>',
      to: 'info@veginn.rw',
      replyTo: validatedData.email,
      subject: '🆕 New Newsletter Subscription',
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
              .info-row { margin: 15px 0; padding: 12px; background: white; border-left: 4px solid #10b981; border-radius: 4px; }
              .label { font-weight: bold; color: #059669; margin-bottom: 5px; }
              .value { color: #1f2937; }
              .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">VegInn Newsletter</h1>
                <p style="margin: 10px 0 0 0;">New Subscription</p>
              </div>
              <div class="content">
                <p style="font-size: 16px; margin-bottom: 20px;">You have a new newsletter subscriber!</p>
                
                <div class="info-row">
                  <div class="label">👤 Name:</div>
                  <div class="value">${validatedData.name}</div>
                </div>

                <div class="info-row">
                  <div class="label">📧 Email:</div>
                  <div class="value">${validatedData.email}</div>
                </div>

                <div class="info-row">
                  <div class="label">📅 Subscribed:</div>
                  <div class="value">${new Date().toLocaleString('en-RW', { timeZone: 'Africa/Kigali' })}</div>
                </div>

                <div class="footer">
                  <p>This subscriber wants updates on job openings, training programs, and workshops.</p>
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
        { error: 'Failed to process subscription. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 200 }
    )

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      )
    }

    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}
