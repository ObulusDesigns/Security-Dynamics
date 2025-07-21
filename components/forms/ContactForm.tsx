'use client';

import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import ReCAPTCHA from 'react-google-recaptcha';
import { Input, Textarea, Select, FormGroup, FormRow } from '@/components/ui/Form';
import { Button } from '@/components/ui/Button';
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { FORMS } from '@/lib/utils/constants';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  service: z.string().optional(),
  urgency: z.enum(['normal', 'urgent', 'emergency']).optional(),
  preferredContact: z.enum(['email', 'phone']).optional(),
  location: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  defaultService?: string;
  defaultLocation?: string;
  showUrgency?: boolean;
}

export function ContactForm({ 
  defaultService, 
  defaultLocation, 
  showUrgency = true 
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: defaultService,
      location: defaultLocation,
      urgency: 'normal',
      preferredContact: 'email',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Only require reCAPTCHA if site key is available
    if (FORMS.recaptchaSiteKey && !recaptchaValue) {
      setSubmitStatus('error');
      setErrorMessage('Please complete the reCAPTCHA verification.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          recaptchaToken: recaptchaValue || 'no-recaptcha'
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        reset();
        setRecaptchaValue(null);
        recaptchaRef.current?.reset();
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.message || 'Something went wrong. Please try again.');
        recaptchaRef.current?.reset();
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Unable to send message. Please try again or call us directly.');
      recaptchaRef.current?.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <FormRow>
        <FormGroup>
          <Input
            label="Name"
            {...register('name')}
            error={errors.name?.message}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            label="Company"
            {...register('company')}
            error={errors.company?.message}
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

      <FormRow>
        <FormGroup>
          <Select
            label="Service Interest"
            {...register('service')}
            error={errors.service?.message}
            options={[
              { value: '', label: 'Select a service' },
              { value: 'Security Systems', label: 'Security Systems' },
              { value: 'Access Control', label: 'Access Control' },
              { value: 'Video Surveillance', label: 'Video Surveillance' },
              { value: '24/7 Monitoring', label: '24/7 Monitoring' },
              { value: 'Fire Alarms', label: 'Fire Alarms' },
              { value: 'Medical Alerts', label: 'Medical Alerts' },
              { value: 'Multiple Services', label: 'Multiple Services' },
              { value: 'Not Sure', label: 'Not Sure - Need Consultation' }
            ]}
          />
        </FormGroup>
        <FormGroup>
          <Select
            label="Preferred Contact Method"
            {...register('preferredContact')}
            error={errors.preferredContact?.message}
            options={[
              { value: 'email', label: 'Email' },
              { value: 'phone', label: 'Phone' }
            ]}
          />
        </FormGroup>
      </FormRow>

      {showUrgency && (
        <FormGroup>
          <Select
            label="Urgency"
            {...register('urgency')}
            error={errors.urgency?.message}
            options={[
              { value: 'normal', label: 'Normal - Response within 24 hours' },
              { value: 'urgent', label: 'Urgent - Response within 4 hours' },
              { value: 'emergency', label: 'Emergency - Immediate response needed' }
            ]}
          />
        </FormGroup>
      )}

      <FormGroup>
        <Input
          label="Location (City, State)"
          {...register('location')}
          error={errors.location?.message}
          placeholder="e.g., Princeton, NJ"
        />
      </FormGroup>

      <FormGroup>
        <Textarea
          label="Message"
          rows={5}
          {...register('message')}
          error={errors.message?.message}
          placeholder="Please describe your security needs or questions..."
          required
        />
      </FormGroup>

      {/* Google reCAPTCHA - Only show if site key is available */}
      {FORMS.recaptchaSiteKey ? (
        <div className="flex justify-center">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={FORMS.recaptchaSiteKey}
            onChange={(value) => setRecaptchaValue(value)}
            onExpired={() => setRecaptchaValue(null)}
            theme="light"
          />
        </div>
      ) : (
        process.env.NODE_ENV === 'development' && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
            <strong>Development Notice:</strong> reCAPTCHA is disabled. Set NEXT_PUBLIC_RECAPTCHA_SITE_KEY in environment variables.
          </div>
        )
      )}

      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start">
          <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-green-800 font-semibold">Message sent successfully!</p>
            <p className="text-green-700 text-sm mt-1">
              We'll contact you within 24 hours (or sooner for urgent requests).
            </p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
          <ExclamationCircleIcon className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-red-800 font-semibold">Error sending message</p>
            <p className="text-red-700 text-sm mt-1">
              {errorMessage}
            </p>
          </div>
        </div>
      )}

      <div className="flex gap-4">
        <Button 
          type="submit" 
          variant="primary" 
          size="lg" 
          loading={isSubmitting}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
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