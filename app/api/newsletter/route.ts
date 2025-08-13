import { NextRequest, NextResponse } from 'next/server';
import { z, ZodError } from 'zod';

// Newsletter signup validation schema
const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  firstName: z.string().optional(),
  interests: z.array(z.string()).optional(),
});

type NewsletterData = z.infer<typeof newsletterSchema>;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate form data
    const validatedData = newsletterSchema.parse(body);
    
    // Check if email already exists (in production, check against database)
    // For now, we'll simulate this check
    const emailExists = false; // await checkEmailExists(validatedData.email);
    
    if (emailExists) {
      return NextResponse.json({
        success: false,
        message: 'This email is already subscribed to our newsletter.',
      }, { status: 400 });
    }
    
    // Format notification email
    const emailContent = formatNewsletterNotification(validatedData);
    
    // TODO: Integrate with email marketing platform
    // 1. Add to email list (Mailchimp, SendGrid Marketing, etc.)
    // 2. Send welcome email to subscriber
    // 3. Send notification to admin
    // Example:
    // await addToMailingList(validatedData.email, validatedData.firstName, validatedData.interests);
    // await sendWelcomeEmail(validatedData.email);
    
    if (process.env.NODE_ENV === 'development') {
      console.log('Newsletter signup:', emailContent);
    }
    
    // In production:
    // 1. Add to email marketing platform (Mailchimp, SendGrid, etc.)
    // 2. Send welcome email to subscriber
    // 3. Send notification to admin
    
    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Thank you for subscribing! Check your email for a welcome message.',
    });
    
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({
        success: false,
        errors: error.issues.map((err) => ({
          field: err.path.join('.'),
          message: err.message,
        })),
      }, { status: 400 });
    }
    
    if (process.env.NODE_ENV === 'development') {
      console.error('Newsletter signup error:', error);
    }
    return NextResponse.json({
      success: false,
      message: 'An error occurred. Please try again later.',
    }, { status: 500 });
  }
}

function formatNewsletterNotification(data: NewsletterData) {
  const subject = 'New Newsletter Subscriber';
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 500px; margin: 0 auto; padding: 20px; }
        .header { background-color: #1B1B3A; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background-color: #f4f4f4; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 10px; }
        .label { font-weight: bold; color: #1B1B3A; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Newsletter Subscriber</h2>
        </div>
        <div class="content">
          <div class="field">
            <span class="label">Email:</span> ${data.email}
          </div>
          ${data.firstName ? `
          <div class="field">
            <span class="label">Name:</span> ${data.firstName}
          </div>
          ` : ''}
          ${data.interests && data.interests.length > 0 ? `
          <div class="field">
            <span class="label">Interests:</span> ${data.interests.join(', ')}
          </div>
          ` : ''}
          <div class="field">
            <span class="label">Date:</span> ${new Date().toLocaleString()}
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
  
  return { subject, html };
}