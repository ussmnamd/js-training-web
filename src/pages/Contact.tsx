import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    consent: false,
    privacy: false
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@jstraininganddevelopment.co.uk", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', consent: false, privacy: false });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="relative min-h-screen bg-white pt-24 pb-16 overflow-hidden">
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
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="New Website Enquiry" />
                <input type="hidden" name="_template" value="table" />

                {/* Name field */}
                <div className="relative">
                  <label className="absolute -top-3 left-4 bg-white px-2 text-xs text-gray-400 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[#193388] outline-none transition-colors text-gray-800 placeholder:text-gray-300"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                {/* Email field */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[#193388] outline-none transition-colors text-gray-800 placeholder:text-gray-300"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                {/* Message field */}
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[#193388] outline-none transition-colors text-gray-800 placeholder:text-gray-300 resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                {/* Checkboxes */}
                <div className="space-y-4 pt-2">
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <div className="relative flex items-center mt-1">
                      <input
                        type="checkbox"
                        className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 checked:bg-[#193388] checked:border-[#193388] transition-all"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        required
                      />
                      <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                    </div>
                    <span className="text-[14px] text-gray-500 leading-tight pt-0.5">
                      I consent to JS Training & Development Ltd contacting me regarding my enquiry.
                    </span>
                  </label>

                  <label className="flex items-start gap-4 cursor-pointer group">
                    <div className="relative flex items-center mt-1">
                      <input
                        type="checkbox"
                        className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 checked:bg-[#193388] checked:border-[#193388] transition-all"
                        checked={formData.privacy}
                        onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                        required
                      />
                      <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                    </div>
                    <span className="text-[14px] text-gray-500 leading-tight pt-0.5">
                      I have read and understood the Privacy Notice. (linked to the Privacy Policy)
                    </span>
                  </label>
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

            <p className="text-[13px] text-gray-400 mt-12 leading-relaxed text-center lg:text-left">
              Your information will only be used to respond to your enquiry and will be kept secure. We aim to respond to enquiries as soon as possible, usually within 1-2 working days.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
