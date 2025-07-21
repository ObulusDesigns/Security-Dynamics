'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input, Checkbox } from '@/components/ui/Form';
import { Button } from '@/components/ui/Button';
import { CheckCircleIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  firstName: z.string().optional(),
  interests: z.array(z.string()).optional(),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

interface NewsletterFormProps {
  showName?: boolean;
  showInterests?: boolean;
  variant?: 'default' | 'compact';
}

export function NewsletterForm({ 
  showName = false, 
  showInterests = false,
  variant = 'default' 
}: NewsletterFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      interests: [],
    },
  });

  const selectedInterests = watch('interests') || [];

  const handleInterestToggle = (interest: string) => {
    const current = selectedInterests;
    if (current.includes(interest)) {
      setValue('interests', current.filter(i => i !== interest));
    } else {
      setValue('interests', [...current, interest]);
    }
  };

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        reset();
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Newsletter signup error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
        <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
        <p className="text-green-800">
          Thank you for subscribing! Check your email for confirmation.
        </p>
      </div>
    );
  }

  const interestOptions = [
    { value: 'home-security', label: 'Home Security Tips' },
    { value: 'business-security', label: 'Business Security' },
    { value: 'technology', label: 'Security Technology' },
    { value: 'safety-tips', label: 'Safety Tips' },
  ];

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
        <div className="flex-1">
          <Input
            type="email"
            placeholder="Enter your email"
            {...register('email')}
            error={errors.email?.message}
            required
          />
        </div>
        <Button 
          type="submit" 
          variant="primary"
          loading={isSubmitting}
          disabled={isSubmitting}
        >
          <EnvelopeIcon className="h-5 w-5 sm:mr-2" />
          <span className="hidden sm:inline">Subscribe</span>
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {showName && (
        <Input
          label="First Name (Optional)"
          {...register('firstName')}
        />
      )}

      <Input
        label="Email Address"
        type="email"
        {...register('email')}
        error={errors.email?.message}
        placeholder="your@email.com"
        required
      />

      {showInterests && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Interests (Optional)
          </label>
          <div className="space-y-2">
            {interestOptions.map((interest) => (
              <Checkbox
                key={interest.value}
                label={interest.label}
                checked={selectedInterests.includes(interest.value)}
                onChange={() => handleInterestToggle(interest.value)}
              />
            ))}
          </div>
        </div>
      )}

      <Button 
        type="submit" 
        variant="primary"
        size="lg"
        loading={isSubmitting}
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </form>
  );
}