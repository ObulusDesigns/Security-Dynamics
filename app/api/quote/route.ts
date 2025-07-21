import { NextRequest, NextResponse } from 'next/server';
import { z, ZodError } from 'zod';

// Quote form validation schema
const quoteFormSchema = z.object({
  // Contact Information
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  company: z.string().optional(),
  
  // Property Information
  propertyType: z.enum(['residential', 'commercial', 'industrial']),
  propertySize: z.string(),
  address: z.string().min(5, 'Address is required'),
  city: z.string().min(2, 'City is required'),
  state: z.enum(['NJ', 'PA']),
  zipCode: z.string().regex(/^\d{5}$/, 'Invalid zip code'),
  
  // Service Requirements
  services: z.array(z.string()).min(1, 'Please select at least one service'),
  currentSystem: z.boolean(),
  currentSystemDetails: z.string().optional(),
  timeline: z.enum(['immediate', '1-2weeks', '1month', 'planning']),
  budget: z.enum(['under5k', '5k-10k', '10k-25k', '25k-50k', 'over50k', 'unsure']),
  
  // Additional Information
  specialRequirements: z.string().optional(),
  howHeard: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate form data
    const validatedData = quoteFormSchema.parse(body);
    
    // Format email content
    const emailContent = formatQuoteEmail(validatedData);
    
    // Log for development (in production, send actual email)
    console.log('Quote request submission:', emailContent);
    
    // In production, integrate with email service
    // await sendEmail({
    //   to: 'sales@securitydynamicsnj.com',
    //   subject: emailContent.subject,
    //   html: emailContent.html,
    //   replyTo: validatedData.email,
    // });
    
    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Thank you for your quote request. Our team will prepare a customized proposal and contact you within 24 hours.',
      quoteNumber: generateQuoteNumber(),
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
    
    console.error('Quote form error:', error);
    return NextResponse.json({
      success: false,
      message: 'An error occurred. Please try again or call us for immediate assistance.',
    }, { status: 500 });
  }
}

function generateQuoteNumber(): string {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `Q${year}${month}${day}-${random}`;
}

function formatQuoteEmail(data: QuoteFormData) {
  const timelineLabels = {
    immediate: 'Immediate (Emergency)',
    '1-2weeks': '1-2 Weeks',
    '1month': 'Within 1 Month',
    planning: 'Planning Phase',
  };
  
  const budgetLabels = {
    under5k: 'Under $5,000',
    '5k-10k': '$5,000 - $10,000',
    '10k-25k': '$10,000 - $25,000',
    '25k-50k': '$25,000 - $50,000',
    over50k: 'Over $50,000',
    unsure: 'Not Sure',
  };
  
  const propertyTypeLabels = {
    residential: 'Residential',
    commercial: 'Commercial',
    industrial: 'Industrial',
  };
  
  const subject = data.timeline === 'immediate' 
    ? `[URGENT] Quote Request - ${data.company || `${data.firstName} ${data.lastName}`}`
    : `Quote Request - ${data.company || `${data.firstName} ${data.lastName}`}`;
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 700px; margin: 0 auto; padding: 20px; }
        .header { background-color: #1B1B3A; color: white; padding: 20px; text-align: center; }
        .section { background-color: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 8px; }
        .section-title { color: #1B1B3A; font-size: 18px; font-weight: bold; margin-bottom: 15px; border-bottom: 2px solid #E53935; padding-bottom: 5px; }
        .field { margin-bottom: 12px; }
        .label { font-weight: bold; color: #555; }
        .value { margin-left: 10px; color: #333; }
        .urgent { background-color: #E53935; color: white; padding: 5px 10px; border-radius: 4px; display: inline-block; }
        .services { background-color: white; padding: 10px; border-radius: 4px; margin-top: 5px; }
        .footer { text-align: center; padding: 10px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Quote Request</h2>
          ${data.timeline === 'immediate' ? '<span class="urgent">IMMEDIATE NEED</span>' : ''}
        </div>
        
        <div class="section">
          <h3 class="section-title">Contact Information</h3>
          <div class="field">
            <span class="label">Name:</span>
            <span class="value">${data.firstName} ${data.lastName}</span>
          </div>
          ${data.company ? `
          <div class="field">
            <span class="label">Company:</span>
            <span class="value">${data.company}</span>
          </div>
          ` : ''}
          <div class="field">
            <span class="label">Email:</span>
            <span class="value"><a href="mailto:${data.email}">${data.email}</a></span>
          </div>
          <div class="field">
            <span class="label">Phone:</span>
            <span class="value"><a href="tel:${data.phone}">${data.phone}</a></span>
          </div>
        </div>
        
        <div class="section">
          <h3 class="section-title">Property Information</h3>
          <div class="field">
            <span class="label">Property Type:</span>
            <span class="value">${propertyTypeLabels[data.propertyType]}</span>
          </div>
          <div class="field">
            <span class="label">Property Size:</span>
            <span class="value">${data.propertySize}</span>
          </div>
          <div class="field">
            <span class="label">Address:</span>
            <span class="value">${data.address}, ${data.city}, ${data.state} ${data.zipCode}</span>
          </div>
        </div>
        
        <div class="section">
          <h3 class="section-title">Service Requirements</h3>
          <div class="field">
            <span class="label">Services Requested:</span>
            <div class="services">
              ${data.services.map(service => `• ${service}`).join('<br>')}
            </div>
          </div>
          <div class="field">
            <span class="label">Current System:</span>
            <span class="value">${data.currentSystem ? 'Yes' : 'No'}</span>
          </div>
          ${data.currentSystem && data.currentSystemDetails ? `
          <div class="field">
            <span class="label">Current System Details:</span>
            <div class="value" style="margin-top: 5px;">${data.currentSystemDetails}</div>
          </div>
          ` : ''}
          <div class="field">
            <span class="label">Timeline:</span>
            <span class="value">${timelineLabels[data.timeline]}</span>
          </div>
          <div class="field">
            <span class="label">Budget Range:</span>
            <span class="value">${budgetLabels[data.budget]}</span>
          </div>
        </div>
        
        ${data.specialRequirements || data.howHeard ? `
        <div class="section">
          <h3 class="section-title">Additional Information</h3>
          ${data.specialRequirements ? `
          <div class="field">
            <span class="label">Special Requirements:</span>
            <div class="value" style="margin-top: 5px;">${data.specialRequirements.replace(/\n/g, '<br>')}</div>
          </div>
          ` : ''}
          ${data.howHeard ? `
          <div class="field">
            <span class="label">How They Heard About Us:</span>
            <span class="value">${data.howHeard}</span>
          </div>
          ` : ''}
        </div>
        ` : ''}
        
        <div class="footer">
          <p>Quote Request submitted on ${new Date().toLocaleString()}</p>
          <p>Quote Number: ${generateQuoteNumber()}</p>
        </div>
      </div>
    </body>
    </html>
  `;
  
  return { subject, html };
}