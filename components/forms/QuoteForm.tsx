'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input, Textarea, Select, Checkbox, FormGroup, FormRow } from '@/components/ui/Form';
import { Button } from '@/components/ui/Button';
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

const quoteSchema = z.object({
  // Contact Information
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  company: z.string().optional(),
  
  // Property Information
  propertyType: z.enum(['residential', 'commercial', 'industrial']),
  propertySize: z.string().min(1, 'Property size is required'),
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

type QuoteFormData = z.infer<typeof quoteSchema>;

const serviceOptions = [
  { value: 'burglar-alarm', label: 'Burglar Alarm System' },
  { value: 'video-surveillance', label: 'Video Surveillance' },
  { value: 'access-control', label: 'Access Control' },
  { value: '24-7-monitoring', label: '24/7 Monitoring' },
  { value: 'fire-alarm', label: 'Fire Alarm System' },
  { value: 'medical-alert', label: 'Medical Alert System' },
  { value: 'smart-home', label: 'Smart Home Integration' },
  { value: 'gate-operators', label: 'Gate Operators' },
  { value: 'intercom', label: 'Intercom Systems' },
];

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [quoteNumber, setQuoteNumber] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      state: 'NJ',
      propertyType: 'residential',
      currentSystem: false,
      timeline: '1month',
      budget: 'unsure',
      services: [],
    },
  });

  const watchCurrentSystem = watch('currentSystem');
  const selectedServices = watch('services') || [];

  const handleServiceToggle = (service: string) => {
    const current = selectedServices;
    if (current.includes(service)) {
      setValue('services', current.filter(s => s !== service));
    } else {
      setValue('services', [...current, service]);
    }
  };

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setQuoteNumber(result.quoteNumber);
        reset();
        
        // Scroll to success message
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Unable to submit quote request. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
        <CheckCircleIcon className="h-16 w-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-900 mb-2">Quote Request Received!</h3>
        <p className="text-green-800 mb-4">
          Your quote number is: <span className="font-mono font-bold">{quoteNumber}</span>
        </p>
        <p className="text-green-700 mb-6">
          Our security specialists will review your requirements and prepare a customized proposal. 
          We'll contact you within 24 hours with your detailed quote.
        </p>
        <Button
          variant="primary"
          onClick={() => {
            setSubmitStatus('idle');
            setQuoteNumber('');
          }}
        >
          Request Another Quote
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Contact Information */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
        <div className="space-y-4">
          <FormRow>
            <FormGroup>
              <Input
                label="First Name"
                {...register('firstName')}
                error={errors.firstName?.message}
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                label="Last Name"
                {...register('lastName')}
                error={errors.lastName?.message}
                required
              />
            </FormGroup>
          </FormRow>

          <FormRow>
            <FormGroup>
              <Input
                label="Email"
                type="email"
                {...register('email')}
                error={errors.email?.message}
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                label="Phone"
                type="tel"
                {...register('phone')}
                error={errors.phone?.message}
                required
              />
            </FormGroup>
          </FormRow>

          <FormGroup>
            <Input
              label="Company Name (Optional)"
              {...register('company')}
              error={errors.company?.message}
            />
          </FormGroup>
        </div>
      </div>

      {/* Property Information */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Property Information</h3>
        <div className="space-y-4">
          <FormRow>
            <FormGroup>
              <Select
                label="Property Type"
                {...register('propertyType')}
                error={errors.propertyType?.message}
                required
                options={[
                  { value: 'residential', label: 'Residential' },
                  { value: 'commercial', label: 'Commercial' },
                  { value: 'industrial', label: 'Industrial' }
                ]}
              />
            </FormGroup>
            <FormGroup>
              <Input
                label="Property Size"
                {...register('propertySize')}
                error={errors.propertySize?.message}
                placeholder="e.g., 2,500 sq ft"
                required
              />
            </FormGroup>
          </FormRow>

          <FormGroup>
            <Input
              label="Street Address"
              {...register('address')}
              error={errors.address?.message}
              required
            />
          </FormGroup>

          <FormRow>
            <FormGroup>
              <Input
                label="City"
                {...register('city')}
                error={errors.city?.message}
                required
              />
            </FormGroup>
            <FormGroup>
              <Select
                label="State"
                {...register('state')}
                error={errors.state?.message}
                required
                options={[
                  { value: 'NJ', label: 'New Jersey' },
                  { value: 'PA', label: 'Pennsylvania' }
                ]}
              />
            </FormGroup>
            <FormGroup>
              <Input
                label="Zip Code"
                {...register('zipCode')}
                error={errors.zipCode?.message}
                pattern="[0-9]{5}"
                required
              />
            </FormGroup>
          </FormRow>
        </div>
      </div>

      {/* Service Requirements */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Service Requirements</h3>
        <div className="space-y-4">
          <FormGroup>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Services Needed <span className="text-red-500">*</span>
            </label>
            <div className="grid sm:grid-cols-2 gap-3">
              {serviceOptions.map((service) => (
                <Checkbox
                  key={service.value}
                  label={service.label}
                  checked={selectedServices.includes(service.value)}
                  onChange={() => handleServiceToggle(service.value)}
                />
              ))}
            </div>
            {errors.services && (
              <p className="mt-1 text-sm text-red-600">{errors.services.message}</p>
            )}
          </FormGroup>

          <FormGroup>
            <Checkbox
              label="I currently have a security system"
              {...register('currentSystem')}
            />
          </FormGroup>

          {watchCurrentSystem && (
            <FormGroup>
              <Textarea
                label="Current System Details"
                rows={3}
                {...register('currentSystemDetails')}
                placeholder="Please describe your current system..."
              />
            </FormGroup>
          )}

          <FormRow>
            <FormGroup>
              <Select
                label="Timeline"
                {...register('timeline')}
                error={errors.timeline?.message}
                required
                options={[
                  { value: 'immediate', label: 'Immediate (Emergency)' },
                  { value: '1-2weeks', label: '1-2 Weeks' },
                  { value: '1month', label: 'Within 1 Month' },
                  { value: 'planning', label: 'Just Planning' }
                ]}
              />
            </FormGroup>
            <FormGroup>
              <Select
                label="Budget Range"
                {...register('budget')}
                error={errors.budget?.message}
                required
                options={[
                  { value: 'under5k', label: 'Under $5,000' },
                  { value: '5k-10k', label: '$5,000 - $10,000' },
                  { value: '10k-25k', label: '$10,000 - $25,000' },
                  { value: '25k-50k', label: '$25,000 - $50,000' },
                  { value: 'over50k', label: 'Over $50,000' },
                  { value: 'unsure', label: 'Not Sure' }
                ]}
              />
            </FormGroup>
          </FormRow>
        </div>
      </div>

      {/* Additional Information */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
        <div className="space-y-4">
          <FormGroup>
            <Textarea
              label="Special Requirements or Questions"
              rows={4}
              {...register('specialRequirements')}
              placeholder="Please share any specific requirements, concerns, or questions..."
            />
          </FormGroup>

          <FormGroup>
            <Select
              label="How did you hear about us?"
              {...register('howHeard')}
              options={[
                { value: '', label: 'Select an option' },
                { value: 'google', label: 'Google Search' },
                { value: 'referral', label: 'Friend/Family Referral' },
                { value: 'social', label: 'Social Media' },
                { value: 'advertising', label: 'Advertisement' },
                { value: 'other', label: 'Other' }
              ]}
            />
          </FormGroup>
        </div>
      </div>

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
          <ExclamationCircleIcon className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-red-800 font-semibold">Error submitting quote</p>
            <p className="text-red-700 text-sm mt-1">
              {errorMessage}
            </p>
          </div>
        </div>
      )}

      <div className="flex gap-4 pt-4">
        <Button 
          type="submit" 
          variant="primary" 
          size="lg" 
          loading={isSubmitting}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Get My Custom Quote'}
        </Button>
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={() => reset()}
          disabled={isSubmitting}
        >
          Clear Form
        </Button>
      </div>
    </form>
  );
}