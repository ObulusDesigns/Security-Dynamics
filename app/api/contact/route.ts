import { NextRequest, NextResponse } from 'next/server';
import { z, ZodError } from 'zod';

// reCAPTCHA verification endpoint
const RECAPTCHA_VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify';

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  service: z.string().optional(),
  urgency: z.enum(['normal', 'urgent', 'emergency']).default('normal'),
  preferredContact: z.enum(['email', 'phone']).default('email'),
  location: z.string().optional(),
  recaptchaToken: z.string().optional(), // Made optional to handle missing reCAPTCHA
});

type ContactFormData = z.infer<typeof contactFormSchema>;

async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    const response = await fetch(RECAPTCHA_VERIFY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate form data
    const validatedData = contactFormSchema.parse(body);
    
    // Verify reCAPTCHA only if token is provided and secret key is configured
    if (process.env.RECAPTCHA_SECRET_KEY && validatedData.recaptchaToken && validatedData.recaptchaToken !== 'no-recaptcha') {
      const isRecaptchaValid = await verifyRecaptcha(validatedData.recaptchaToken);
      if (!isRecaptchaValid) {
        return NextResponse.json({
          success: false,
          message: 'reCAPTCHA verification failed. Please try again.',
        }, { status: 400 });
      }
    } else if (!process.env.RECAPTCHA_SECRET_KEY) {
      // Log warning in development if reCAPTCHA is not configured
      console.warn('Warning: RECAPTCHA_SECRET_KEY not configured. Form submissions are not protected by reCAPTCHA.');
    }
    
    // Format email content (without recaptchaToken)
    const { recaptchaToken, ...formData } = validatedData;
    const emailContent = formatEmailContent(formData);
    
    // In a production environment, you would send this to an email service
    // For now, we'll simulate the email sending
    console.log('Contact form submission:', emailContent);
    
    // In production, use a service like SendGrid, AWS SES, or Resend
    // Example with a hypothetical email service:
    // await sendEmail({
    //   to: 'info@securitydynamicsnj.com',
    //   subject: emailContent.subject,
    //   html: emailContent.html,
    //   replyTo: validatedData.email,
    // });
    
    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Thank you for your inquiry. We will contact you within 24 hours.',
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
    
    console.error('Contact form error:', error);
    return NextResponse.json({
      success: false,
      message: 'An error occurred. Please try again or call us directly.',
    }, { status: 500 });
  }
}

function formatEmailContent(data: Omit<ContactFormData, 'recaptchaToken'>) {
  const urgencyLabel = {
    normal: 'Normal',
    urgent: 'Urgent',
    emergency: 'EMERGENCY',
  };
  
  const subject = data.urgency === 'emergency' 
    ? `[EMERGENCY] Contact Form Submission from ${data.name}`
    : `Contact Form Submission from ${data.name}`;
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #1B1B3A; color: white; padding: 20px; text-align: center; }
        .content { background-color: #f4f4f4; padding: 20px; margin: 20px 0; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #1B1B3A; }
        .value { margin-left: 10px; }
        .urgent { color: #E53935; font-weight: bold; }
        .footer { text-align: center; padding: 10px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Contact Form Submission</h2>
          ${data.urgency !== 'normal' ? `<p class="urgent">Priority: ${urgencyLabel[data.urgency]}</p>` : ''}
        </div>
        
        <div class="content">
          <div class="field">
            <span class="label">Name:</span>
            <span class="value">${data.name}</span>
          </div>
          
          <div class="field">
            <span class="label">Email:</span>
            <span class="value"><a href="mailto:${data.email}">${data.email}</a></span>
          </div>
          
          <div class="field">
            <span class="label">Phone:</span>
            <span class="value"><a href="tel:${data.phone}">${data.phone}</a></span>
          </div>
          
          ${data.company ? `
          <div class="field">
            <span class="label">Company:</span>
            <span class="value">${data.company}</span>
          </div>
          ` : ''}
          
          ${data.service ? `
          <div class="field">
            <span class="label">Service Interest:</span>
            <span class="value">${data.service}</span>
          </div>
          ` : ''}
          
          ${data.location ? `
          <div class="field">
            <span class="label">Location:</span>
            <span class="value">${data.location}</span>
          </div>
          ` : ''}
          
          <div class="field">
            <span class="label">Preferred Contact Method:</span>
            <span class="value">${data.preferredContact === 'phone' ? 'Phone' : 'Email'}</span>
          </div>
          
          <div class="field">
            <span class="label">Message:</span>
            <div class="value" style="margin-top: 10px; padding: 10px; background-color: white; border-radius: 5px;">
              ${data.message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
        
        <div class="footer">
          <p>This email was sent from the Security Dynamics website contact form.</p>
          <p>Submission time: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    </body>
    </html>
  `;
  
  const text = `
New Contact Form Submission
${data.urgency !== 'normal' ? `Priority: ${urgencyLabel[data.urgency]}` : ''}

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
${data.company ? `Company: ${data.company}` : ''}
${data.service ? `Service Interest: ${data.service}` : ''}
${data.location ? `Location: ${data.location}` : ''}
Preferred Contact Method: ${data.preferredContact === 'phone' ? 'Phone' : 'Email'}

Message:
${data.message}

---
Submission time: ${new Date().toLocaleString()}
  `;
  
  return { subject, html, text };
}