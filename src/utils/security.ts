/**
 * Security utilities and configurations
 * Content Security Policy, security headers, and security helpers
 */

/**
 * Content Security Policy configuration
 * Adjust based on your specific needs
 */
export const CSP_CONFIG = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"], // 'unsafe-eval' needed for Vite dev
  'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
  'font-src': ["'self'", 'https://fonts.gstatic.com', 'data:'],
  'img-src': ["'self'", 'data:', 'https:', 'blob:'],
  'connect-src': ["'self'", 'https:'],
  'frame-ancestors': ["'none'"],
  'base-uri': ["'self'"],
  'form-action': ["'self'"],
  'frame-src': ["'none'"],
  'object-src': ["'none'"],
  'upgrade-insecure-requests': [],
};

/**
 * Generate CSP header string from config
 */
export const generateCSP = (): string => {
  return Object.entries(CSP_CONFIG)
    .map(([directive, sources]) => {
      if (sources.length === 0) {
        return directive;
      }
      return `${directive} ${sources.join(' ')}`;
    })
    .join('; ');
};

/**
 * Security headers configuration
 * These should be set in your server/hosting configuration
 * For development, we'll set them via meta tags where possible
 */
export const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
  'Content-Security-Policy': generateCSP(),
};

/**
 * Rate limiting configuration (client-side)
 * Note: Real rate limiting should be implemented server-side
 */
export const RATE_LIMIT_CONFIG = {
  formSubmission: {
    maxAttempts: 5,
    windowMs: 15 * 60 * 1000, // 15 minutes
  },
  search: {
    maxAttempts: 30,
    windowMs: 60 * 1000, // 1 minute
  },
};

/**
 * Simple client-side rate limiter
 * Stores attempts in sessionStorage
 */
export class RateLimiter {
  private key: string;
  private maxAttempts: number;
  private windowMs: number;

  constructor(key: string, maxAttempts: number, windowMs: number) {
    this.key = `rate_limit_${key}`;
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
  }

  canProceed(): boolean {
    if (typeof window === 'undefined') return true; // SSR safety

    const stored = sessionStorage.getItem(this.key);
    if (!stored) {
      this.recordAttempt();
      return true;
    }

    const { attempts, timestamp } = JSON.parse(stored);
    const now = Date.now();

    // Reset if window has passed
    if (now - timestamp > this.windowMs) {
      this.recordAttempt();
      return true;
    }

    // Check if limit exceeded
    if (attempts >= this.maxAttempts) {
      return false;
    }

    this.recordAttempt();
    return true;
  }

  private recordAttempt(): void {
    if (typeof window === 'undefined') return;

    const stored = sessionStorage.getItem(this.key);
    const now = Date.now();

    if (stored) {
      const { attempts, timestamp } = JSON.parse(stored);
      if (now - timestamp < this.windowMs) {
        sessionStorage.setItem(
          this.key,
          JSON.stringify({ attempts: attempts + 1, timestamp })
        );
        return;
      }
    }

    sessionStorage.setItem(this.key, JSON.stringify({ attempts: 1, timestamp: now }));
  }

  getRemainingAttempts(): number {
    if (typeof window === 'undefined') return this.maxAttempts;

    const stored = sessionStorage.getItem(this.key);
    if (!stored) return this.maxAttempts;

    const { attempts, timestamp } = JSON.parse(stored);
    const now = Date.now();

    if (now - timestamp > this.windowMs) {
      return this.maxAttempts;
    }

    return Math.max(0, this.maxAttempts - attempts);
  }

  reset(): void {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem(this.key);
    }
  }
}

/**
 * Generate CSRF token (client-side helper)
 * Note: Real CSRF tokens should come from the server
 */
export const generateCSRFToken = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join('');
};

/**
 * Validate CSRF token format
 */
export const isValidCSRFToken = (token: string): boolean => {
  return /^[a-f0-9]{64}$/.test(token);
};

/**
 * Check if request is from same origin
 */
export const isSameOrigin = (url: string): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    const parsed = new URL(url, window.location.origin);
    return parsed.origin === window.location.origin;
  } catch {
    return false;
  }
};
