import { ClipboardCheck, CheckCircle } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Services: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Services"
        description="Discover our range of training, assessment, and consultancy services including adult care, early years, and quality assurance."
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#f8fbff] py-12 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Decorative Dot on the left */}
              <div className="absolute -left-12 top-2 w-2 h-2 bg-[#193388] rounded-full hidden lg:block" />

              <h1 className="text-[52px] lg:text-[72px] font-bold text-gray-900 leading-[1.1] mb-8 tracking-tight">
                Up Your <span className="text-[#193388]">Skills</span> <br />
                To <span className="text-[#193388]">Advance</span> Your <br />
                <span className="text-[#193388]">Career</span> Path
              </h1>
            </motion.div>

            {/* Right Content: Circular Image & Decorations */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[550px]">
                {/* Main Circular Image */}
                <div className="relative z-10 rounded-full overflow-hidden border-[15px] border-white shadow-[0_20px_60px_rgba(0,0,0,0.1)] aspect-square">
                  <img
                    src="/images/services/hero.png"
                    alt="Career Growth"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Decorative Elements */}
                {/* Large Blue Dot (Bottom Left) */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#334b9b] rounded-full z-20 shadow-lg"
                />

                {/* Small Blue Dot (Bottom Right) */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-10 -right-2 w-4 h-4 bg-[#334b9b] rounded-full z-20"
                />

                {/* Yellow Dot (Mid Right) */}
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 -right-8 w-4 h-4 bg-[#FFC107] rounded-full z-20 opacity-60"
                />

                {/* Soft Background Circle - More prominent */}
                <div className="absolute -top-12 -left-12 w-[115%] h-[115%] rounded-full border-[7px] border-blue-100/60 -z-10" />
                <div className="absolute -top-16 -left-16 w-[125%] h-[125%] rounded-full border border-blue-50/40 -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Services Content Section */}
      <section className="py-16 relative">
        {/* Central Vertical Dotted Line */}
        <div className="absolute left-1/2 top-32 bottom-32 w-px border-l-2 border-dashed border-blue-200 -translate-x-1/2 hidden lg:block" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16 relative z-10">
            <h2 className="text-[#193388] font-bold text-xl mb-6">Our Services</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              JS Training & Development Ltd provides education, training, assessment, and professional development services designed to support individuals, employers, and organisations across care, education, and workforce settings. Our services are underpinned by quality assurance, safeguarding, and compliance with awarding organisation requirements.
            </p>
          </div>

          <div className="space-y-24 relative z-10">
            {/* 1. Adult Care Training & Qualifications */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Decorative Blobs & Patterns */}
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#00FFBB]/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 -right-8 w-32 h-32 bg-[#4F46E5]/10 rounded-full blur-2xl" />

                {/* Dot Pattern Grid */}
                <div className="absolute -top-6 -right-6 grid grid-cols-4 gap-2 opacity-20 hidden lg:grid">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-[#193388] rounded-full" />
                  ))}
                </div>

                <div className="relative z-10 rounded-full overflow-hidden border-[15px] border-white shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] aspect-square max-w-[450px] mx-auto">
                  <img src="/images/services/services1.png" alt="Adult Care" className="w-full h-full object-cover" />
                </div>

                {/* Floating circle indicator */}
                <div className="absolute bottom-10 -right-2 w-14 h-14 bg-[#4F46E5] rounded-full shadow-lg flex items-center justify-center p-3 z-20">
                  <div className="w-full h-full bg-white/20 rounded-full" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:pl-16"
              >
                <h3 className="text-[32px] font-bold text-[#193388] mb-6">Adult Care Training <br /> & Qualifications</h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Programmes supporting learners and organisations across adult care settings, from entry-level roles through to leadership and management.
                </p>
                <ul className="space-y-4">
                  {[
                    'Adult Care qualifications (Levels 1-5)',
                    'Workforce-focused delivery',
                    'Learner-centred assessment and support'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#193388] text-xl font-bold">•</span>
                      <span className="text-gray-600 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* 2. Early Years Education */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1 lg:pr-16"
              >
                <h3 className="text-[32px] font-bold text-[#193388] mb-6">Early Years Education</h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Training and professional development designed to support early years practitioners and leaders.
                </p>
                <ul className="space-y-4">
                  {[
                    'Early Years training and qualifications',
                    'Focus on quality practice, safeguarding, and child development',
                    'Provision subject to awarding organisation approval'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#193388] text-xl font-bold">•</span>
                      <span className="text-gray-600 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative order-1 lg:order-2"
              >
                <div className="absolute inset-0 bg-blue-50/50 rounded-full scale-110 -z-10" />
                <div className="relative z-10 rounded-full overflow-hidden border-[12px] border-white shadow-2xl shadow-blue-200">
                  <img src="/images/services/services2.png" alt="Early Years" className="w-full h-auto" />
                </div>

                {/* Decorative dots in image */}
                <div className="absolute top-1/2 -right-8 flex flex-col gap-3">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center">
                    <div className="w-5 h-5 bg-orange-400 rounded-sm" />
                  </div>
                  <div className="w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center">
                    <div className="w-5 h-5 bg-blue-400 rounded-sm" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* 3. Training, Assessment & Quality Assurance */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative z-10 bg-white rounded-3xl p-5 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] border border-gray-100 max-w-[400px] mx-auto group">
                  {/* Top UI Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>
                    <div className="bg-blue-50 text-[#193388] text-[10px] font-bold px-3 py-1 rounded-full border border-blue-100 uppercase tracking-tighter">
                      Quality check
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-xl mb-4">
                    <img src="/images/services/service3.png" alt="Quality Controls" className="w-full h-auto group-hover:scale-105 transition-all duration-700" />
                  </div>

                  {/* Bottom Floating Pill */}
                  <div className="absolute -bottom-6 -right-6 bg-white p-3 px-6 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-50 z-20">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                      <CheckCircle className="text-white w-5 h-5" />
                    </div>
                    <div className="text-[12px] font-bold text-gray-800 whitespace-nowrap">Pass or Fail?</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:pl-16"
              >
                <h3 className="text-[32px] font-bold text-[#193388] mb-6">Training, Assessment & <br /> Quality Assurance</h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Programmes supporting individuals involved in training delivery and assessment.
                </p>
                <ul className="space-y-4">
                  {[
                    'Assessor qualifications',
                    'Internal Quality Assurance (IQA) qualifications',
                    'Support for consistent assessment practice and quality improvement'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#193388] text-xl font-bold">•</span>
                      <span className="text-gray-600 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* 4. Continuing Professional Development (CPD) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1 lg:pr-16"
              >
                <h3 className="text-[32px] font-bold text-[#193388] mb-6">Continuing Professional <br /> Development (CPD)</h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Standard and bespoke CPD programmes supporting ongoing professional learning.
                </p>
                <ul className="space-y-4">
                  {[
                    'Safeguarding and learner protection',
                    'Assessment and quality assurance practice',
                    'Leadership and professional skills'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#193388] text-xl font-bold">•</span>
                      <span className="text-gray-600 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative order-1 lg:order-2 px-6"
              >
                {/* Blurred Replica Glow */}
                <div className="absolute inset-0 bg-blue-100/40 rounded-[40px] blur-3xl -z-10 translate-y-8 scale-90" />
                <div className="absolute inset-x-12 bottom-0 h-1/2 opacity-30 blur-2xl -z-10 scale-110">
                  <img src="/images/services/service4.png" alt="CPD Glow" className="w-full h-full object-cover rounded-full" />
                </div>

                <div className="relative z-10 bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 max-h-[300px]">
                  {/* Browser Bar Style Header */}
                  <div className="bg-gray-50/80 px-4 py-2 border-b border-gray-100 flex gap-1.5 items-center">
                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                  </div>
                  <img src="/images/services/service4.png" alt="CPD" className="w-full h-auto object-cover" />
                </div>
              </motion.div>
            </div>

            {/* 5. Bespoke Training & Consultancy */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative z-10 bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 max-w-lg mx-auto group">
                  {/* Mock Browser Header */}
                  <div className="flex items-center gap-2 mb-4 opacity-40">
                    <div className="w-3 h-3 rounded-full bg-gray-200" />
                    <div className="w-20 h-2 bg-gray-100 rounded-full" />
                  </div>

                  <div className="rounded-xl overflow-hidden border border-gray-50">
                    <img src="/images/services/service5.png" alt="Bespoke Training" className="w-full h-auto group-hover:scale-105 transition-all duration-1000" />
                  </div>

                  {/* Floating Brand Accent */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#193388] rounded-2xl flex items-center justify-center shadow-lg -rotate-12 z-20">
                    <ClipboardCheck className="text-white w-6 h-6" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:pl-16"
              >
                <h3 className="text-[32px] font-bold text-[#193388] mb-6">Bespoke Training & <br /> Consultancy</h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Tailored training and consultancy services designed to meet organisational and workforce needs.
                </p>
                <ul className="space-y-4">
                  {[
                    'Bespoke training solutions',
                    'Quality improvement and compliance support',
                    'Sector-specific consultancy'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#193388] text-xl font-bold">•</span>
                      <span className="text-gray-600 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
