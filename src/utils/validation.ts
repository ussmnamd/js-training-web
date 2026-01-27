import { z } from 'zod';

/**
 * Validation schemas for all forms in the application
 * Using Zod for runtime type validation and schema validation
 */

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[\d\s\-\+\(\)]+$/.test(val),
      'Please enter a valid phone number'
    ),
  subject: z
    .string()
    .min(3, 'Subject must be at least 3 characters')
    .max(200, 'Subject must be less than 200 characters'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters'),
  honeypot: z.string().max(0, 'Bot detected').optional(), // Honeypot field for bot detection
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Search Input Schema
export const searchSchema = z.object({
  query: z
    .string()
    .min(1, 'Search query is required')
    .max(100, 'Search query must be less than 100 characters')
    .regex(/^[a-zA-Z0-9\s\-_]+$/, 'Search query contains invalid characters'),
});

export type SearchData = z.infer<typeof searchSchema>;

// Newsletter Subscription Schema
export const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;

// Generic Text Input Validation
export const textInputSchema = z.object({
  text: z
    .string()
    .min(1, 'This field is required')
    .max(1000, 'Text must be less than 1000 characters'),
});

// URL Validation Schema
export const urlSchema = z
  .string()
  .url('Please enter a valid URL')
  .refine(
    (url) => {
      try {
        const parsed = new URL(url);
        return ['http:', 'https:'].includes(parsed.protocol);
      } catch {
        return false;
      }
    },
    'URL must use http or https protocol'
  );

// Phone Number Validation Helper
export const validatePhoneNumber = (phone: string): boolean => {
  // Remove common formatting characters
  const cleaned = phone.replace(/[\s\-\(\)\+]/g, '');
  // Check if it's all digits and reasonable length (7-15 digits)
  return /^\d{7,15}$/.test(cleaned);
};

// Email Validation Helper (additional to Zod)
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 255;
};
