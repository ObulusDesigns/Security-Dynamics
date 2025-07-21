'use client';

import React from 'react';
import { FORMS } from '@/lib/utils/constants';

export function RecaptchaBadge() {
  // Only show badge if reCAPTCHA is configured
  if (!FORMS.recaptchaSiteKey) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 z-40 hidden lg:flex items-center space-x-2 text-xs text-gray-500">
      <div className="bg-white rounded-lg shadow-md p-2 flex items-center space-x-2">
        {/* reCAPTCHA Logo */}
        <svg width="24" height="24" viewBox="0 0 24 24" className="opacity-60">
          <path
            fill="#1C3AA9"
            d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.5 7l-1.5 1.5v9l-1.5 1.5h-9L5 17.5v-9L6.5 7h9z"
          />
          <path
            fill="#4285F4"
            d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25zM7.5 9v6l1.5 1.5h6L16.5 15V9L15 7.5H9L7.5 9z"
          />
          <path
            fill="#ABABAB"
            d="M9.75 11.25v1.5h1.5v-1.5h-1.5zm3 0v1.5h1.5v-1.5h-1.5z"
          />
        </svg>
        <span className="text-gray-600">
          Protected by reCAPTCHA
        </span>
        <div className="text-gray-400">
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors"
          >
            Privacy
          </a>
          <span className="mx-1">•</span>
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors"
          >
            Terms
          </a>
        </div>
      </div>
    </div>
  );
}