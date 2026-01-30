import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { sanitizeObject } from '../utils/sanitize';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  consent: z.boolean().refine(val => val === true, 'You must consent to be contacted'),
  privacy: z.boolean().refine(val => val === true, 'You must agree to the privacy notice'),
  recaptchaToken: z.string().min(1, 'Please complete the reCAPTCHA'),
  hp_field: z.string().optional(), // Honeypot field
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      consent: false,
      privacy: false,
      recaptchaToken: '',
      hp_field: ''
    }
  });

  // Watch checkbox values for controlled state
  const consentValue = watch('consent');
  const privacyValue = watch('privacy');

  const onCaptchaChange = (token: string | null) => {
    setValue('recaptchaToken', token || '');
  };

  const onSubmit = async (data: ContactFormData) => {
    // 1. Honeypot check: If bot filled this, silently fail
    if (data.hp_field) {
      console.warn('Bot detected via honeypot');
      setStatus('success');
      reset();
      return;
    }

    setStatus('loading');

    try {
      // Sanitize data before sending
      const sanitizedData = sanitizeObject(data);
      // Remove recaptchaToken and honeypot before sending to server
      const { recaptchaToken, hp_field, ...finalData } = sanitizedData;

      const response = await fetch("https://formsubmit.co/ajax/info@jstraininganddevelopment.co.uk", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(finalData)
      });

      if (response.ok) {
        setStatus('success');
        reset();
        recaptchaRef.current?.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="relative min-h-screen bg-white pt-32 lg:pt-28 pb-16 overflow-hidden">
      <SEO
        title="Contact Us"
        description="Get in touch with JS Training & Development Ltd for enquiries about our professional training and development services."
      />
      {/* Background Decorative Squares - Left (Blue) */}
      <div className="absolute left-0 bottom-20 z-0 pointer-events-none opacity-20 lg:opacity-100">
        <div className="relative">
          <div className="w-24 h-24 border-4 border-[#193388] absolute left-0 bottom-0" />
          <div className="w-24 h-24 border-4 border-[#193388] absolute left-10 bottom-10" />
          <div className="w-24 h-24 border-4 border-[#193388] absolute left-20 bottom-20" />
        </div>
      </div>

      {/* Background Decorative Squares - Right (Orange) */}
      <div className="absolute right-0 top-1/2 z-0 pointer-events-none opacity-20 lg:opacity-100">
        <div className="relative">
          <div className="w-24 h-24 border-4 border-[#FFB347] absolute right-0 top-0" />
          <div className="w-24 h-24 border-4 border-[#FFB347] absolute right-10 top-10" />
          <div className="w-24 h-24 border-4 border-[#FFB347] absolute right-20 top-20" />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[800px] mx-auto bg-white rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-50 p-6 lg:p-12"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-[#193388] text-2xl font-bold tracking-widest relative inline-block mb-2">
              CONTACT US
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#193388]" />
            </h1>
            <p className="text-gray-600 font-medium block mt-4">
              info@jstraininganddevelopment.co.uk
            </p>
          </div>

          <div className="max-w-[550px] mx-auto">
            <h2 className="text-gray-900 font-bold text-xl mb-8">Leave us a message</h2>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-8">Thank you for your enquiry. We will get back to you shortly.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-[#193388] font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="New Website Enquiry" />
                <input type="hidden" name="_template" value="table" />

                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  {...register('hp_field')}
                  tabIndex={-1}
                  className="hidden"
                  autoComplete="off"
                />

                {/* Name field */}
                <div className="relative group">
                  <label className="absolute -top-3 left-4 bg-white px-2 text-xs text-[#193388] font-bold z-10">Name</label>
                  <input
                    type="text"
                    placeholder="Full name"
                    className={`w-full px-6 py-4 rounded-xl border-[3px] ${errors.name ? 'border-red-500' : 'border-gray-300 group-hover:border-gray-400'} bg-gray-50/30 focus:bg-white focus:border-[#193388] outline-none transition-all text-gray-800 placeholder:text-gray-400 shadow-sm`}
                    {...register('name')}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 ml-4 font-medium">{errors.name.message}</p>}
                </div>

                {/* Email field */}
                <div className="relative group">
                  <label className="absolute -top-3 left-4 bg-white px-2 text-xs text-[#193388] font-bold z-10">Email Address</label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className={`w-full px-6 py-4 rounded-xl border-[3px] ${errors.email ? 'border-red-500' : 'border-gray-300 group-hover:border-gray-400'} bg-gray-50/30 focus:bg-white focus:border-[#193388] outline-none transition-all text-gray-800 placeholder:text-gray-400 shadow-sm`}
                    {...register('email')}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 ml-4 font-medium">{errors.email.message}</p>}
                </div>

                {/* Message field */}
                <div className="relative group">
                  <label className="absolute -top-3 left-4 bg-white px-2 text-xs text-[#193388] font-bold z-10">Your Message</label>
                  <textarea
                    placeholder="How can we help?"
                    rows={6}
                    className={`w-full px-6 py-4 rounded-xl border-[3px] ${errors.message ? 'border-red-500' : 'border-gray-300 group-hover:border-gray-400'} bg-gray-50/30 focus:bg-white focus:border-[#193388] outline-none transition-all text-gray-800 placeholder:text-gray-400 resize-none shadow-sm`}
                    {...register('message')}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1 ml-4 font-medium">{errors.message.message}</p>}
                </div>

                {/* Google reCAPTCHA */}
                <div className="flex justify-start">
                  <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Currently using Google's test key
                      onChange={onCaptchaChange}
                    />
                  </div>
                </div>
                {errors.recaptchaToken && (
                  <p className="text-red-500 text-xs mt-2 ml-1">{errors.recaptchaToken.message}</p>
                )}

                {/* Checkboxes */}
                <div className="space-y-6 pt-4">
                  <div>
                    <label className="flex items-start gap-4 cursor-pointer group">
                      <div className="relative flex items-center mt-0.5">
                        <input
                          type="checkbox"
                          checked={consentValue}
                          onChange={(e) => setValue('consent', e.target.checked, { shouldValidate: true })}
                          className={`peer h-6 w-6 cursor-pointer appearance-none rounded-lg border-[3px] ${errors.consent ? 'border-red-500' : 'border-gray-400 group-hover:border-[#193388]'} checked:bg-[#193388] checked:border-[#193388] transition-all bg-white`}
                        />
                        <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1.5">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                        </span>
                      </div>
                      <span className="text-[15px] text-gray-700 font-medium leading-relaxed pt-0.5 group-hover:text-gray-900 transition-colors">
                        I consent to JS Training & Development Ltd contacting me regarding my enquiry.
                      </span>
                    </label>
                    {errors.consent && <p className="text-red-500 text-[13px] mt-1.5 ml-10 font-medium">{errors.consent.message}</p>}
                  </div>

                  <div>
                    <label className="flex items-start gap-4 cursor-pointer group">
                      <div className="relative flex items-center mt-0.5">
                        <input
                          type="checkbox"
                          checked={privacyValue}
                          onChange={(e) => setValue('privacy', e.target.checked, { shouldValidate: true })}
                          className={`peer h-6 w-6 cursor-pointer appearance-none rounded-lg border-[3px] ${errors.privacy ? 'border-red-500' : 'border-gray-400 group-hover:border-[#193388]'} checked:bg-[#193388] checked:border-[#193388] transition-all bg-white`}
                        />
                        <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1.5">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                        </span>
                      </div>
                      <span className="text-[15px] text-gray-700 font-medium leading-relaxed pt-0.5 group-hover:text-gray-900 transition-colors">
                        I have read and understood the Privacy Notice.
                      </span>
                    </label>
                    {errors.privacy && <p className="text-red-500 text-[13px] mt-1.5 ml-10 font-medium">{errors.privacy.message}</p>}
                  </div>
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm font-medium">Something went wrong. Please try again or email us directly.</p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#193388] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#1e3d9e] transition-colors mt-8 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : 'Send'}
                </button>
              </form>
            )}

            <div className="mt-12 space-y-6">
              <div className="pt-6 border-t border-gray-100">
                <h4 className="text-gray-900 font-bold text-sm mb-2">Privacy Notice</h4>
                <p className="text-[13px] text-gray-500 leading-relaxed italic">
                  We collect your name and email address solely to process and respond to your enquiry. Your data is handled securely, stored in accordance with our data protection policies, and will not be shared with third parties.
                </p>
              </div>
              <p className="text-[15px] text-gray-600 font-medium text-center lg:text-left">
                We aim to respond to enquiries as soon as possible, usually within 1–2 working days.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
