import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

// Initialize Resend with fallback for build time
const resend = new Resend(process.env.RESEND_API_KEY || 'placeholder')

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
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
    
    // Validate the form data
    const validatedData = contactFormSchema.parse(body)
    
    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'VegInn Contact Form <onboarding@resend.dev>', // Use your verified domain
      to: ['info@veginn.rw'], // Your business email
      replyTo: validatedData.email,
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #047857;">New Contact Form Submission</h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong style="color: #374151;">Name:</strong> ${validatedData.name}</p>
            <p><strong style="color: #374151;">Email:</strong> ${validatedData.email}</p>
            ${validatedData.phone ? `<p><strong style="color: #374151;">Phone:</strong> ${validatedData.phone}</p>` : ''}
          </div>
          
          <div style="margin-top: 20px;">
            <h3 style="color: #047857;">Message:</h3>
            <p style="white-space: pre-wrap; background-color: #f9fafb; padding: 15px; border-radius: 8px;">${validatedData.message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This email was sent from the VegInn contact form at veginn.rw</p>
            <p>Submitted on: ${new Date().toLocaleString('en-RW', { timeZone: 'Africa/Kigali' })}</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        success: true,
        message: 'Email sent successfully',
        id: data?.id 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
