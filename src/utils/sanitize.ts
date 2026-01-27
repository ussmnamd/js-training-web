import DOMPurify from 'isomorphic-dompurify';

/**
 * HTML sanitization utilities using DOMPurify for XSS protection
 * All user-generated content should be sanitized before rendering
 */

// Configure DOMPurify with security settings
const sanitizeConfig = {
  ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'a', 'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as string[],
  ALLOWED_ATTR: ['href', 'title', 'target', 'rel'] as string[],
  ALLOW_DATA_ATTR: false,
  FORBID_TAGS: ['script', 'iframe', 'object', 'embed', 'form', 'input', 'button'] as string[],
  FORBID_ATTR: ['onerror', 'onload', 'onclick', 'onmouseover', 'style'] as string[],
};

/**
 * Sanitize HTML content to prevent XSS attacks
 * @param dirty - Unsanitized HTML string
 * @returns Sanitized HTML string safe for rendering
 */
export const sanitizeHTML = (dirty: string): string => {
  if (!dirty) return '';
  return DOMPurify.sanitize(dirty, sanitizeConfig) as string;
};

/**
 * Sanitize plain text (strips all HTML)
 * @param text - Text that may contain HTML
 * @returns Plain text with all HTML removed
 */
export const sanitizeText = (text: string): string => {
  if (!text) return '';
  return DOMPurify.sanitize(text, { ALLOWED_TAGS: [] }) as string;
};

/**
 * Sanitize user input for display in attributes
 * @param input - User input string
 * @returns Sanitized string safe for HTML attributes
 */
export const sanitizeAttribute = (input: string): string => {
  if (!input) return '';
  // Remove any HTML and encode special characters
  return sanitizeText(input)
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
};

/**
 * Sanitize URL to prevent javascript: and data: protocol attacks
 * @param url - URL string to sanitize
 * @returns Sanitized URL or empty string if invalid
 */
export const sanitizeURL = (url: string): string => {
  if (!url) return '';

  try {
    const parsed = new URL(url);
    // Only allow http and https protocols
    if (['http:', 'https:'].includes(parsed.protocol)) {
      return parsed.toString();
    }
    return '';
  } catch {
    // If URL parsing fails, try to sanitize as text
    const sanitized = sanitizeText(url);
    // If it looks like it might be a URL, prepend https://
    if (sanitized.match(/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}/)) {
      return `https://${sanitized}`;
    }
    return '';
  }
};

/**
 * Sanitize form input before processing
 * Removes leading/trailing whitespace and sanitizes content
 * @param input - Form input value
 * @returns Sanitized input
 */
export const sanitizeInput = (input: string): string => {
  if (!input) return '';
  return sanitizeText(input.trim());
};

/**
 * Sanitize object with string values recursively
 * Useful for sanitizing form data objects
 */
export const sanitizeObject = <T extends Record<string, unknown>>(obj: T): T => {
  const sanitized = { ...obj };
  for (const key in sanitized) {
    if (typeof sanitized[key] === 'string') {
      sanitized[key] = sanitizeInput(sanitized[key] as string) as T[typeof key];
    } else if (typeof sanitized[key] === 'object' && sanitized[key] !== null) {
      sanitized[key] = sanitizeObject(sanitized[key] as Record<string, unknown>) as T[typeof key];
    }
  }
  return sanitized;
};
