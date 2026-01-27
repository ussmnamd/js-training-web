import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Blogs: React.FC = () => {

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Insights & Updates"
        description="Stay informed with insights, guidance, and updates from across the education and care sectors by JS Training & Development Ltd."
      />
      {/* High-Fidelity Hero Section */}
      <section className="pt-20 pb-8 lg:pt-24 lg:pb-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <h1 className="text-[40px] lg:text-[46px] font-bold text-gray-900 leading-[1.2] mb-10">
                Insights, guidance and updates from across the <span className="text-[#193388]">education and care sectors</span>
              </h1>
              <p className="text-gray-600 text-lg lg:text-[19px] leading-relaxed">
                We share practical insights, guidance, and updates drawn from sector experience and regulatory understanding.
              </p>
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-[40px] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] border border-gray-100">
                <img
                  src="/images/blogs/bloghero1.png"
                  alt="Remote Learning and Insights"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pb-20">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-gray-900 font-bold text-2xl">Our Blogs</h2>
        </div>

        <div className="space-y-12">
          {/* 1. Safeguarding Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[32px] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.05)] border border-gray-100"
          >
            <div className="p-2">
              <div className="rounded-[24px] overflow-hidden">
                <img src="/images/blogs/blog1.png" alt="Safeguarding" className="w-full h-auto" />
              </div>
            </div>
            <div className="p-8 lg:p-12">
              <h3 className="text-[28px] font-bold text-gray-900 mb-6 leading-tight">
                Safeguarding and Learner Protection In Education and Training
              </h3>
              <div className="space-y-6 text-gray-500 text-[17px] leading-relaxed">
                <p>
                  Safeguarding and learner protection are fundamental responsibilities within education and training. JS Training & Development Ltd has a duty of care to ensure learners are safe, supported, and treated with dignity and respect throughout their learning journey. Safeguarding applies to all learners and includes protection from harm, neglect, exploitation, bullying, harassment, and discrimination.
                </p>
                <p>
                  It also involves promoting emotional wellbeing, maintaining professional boundaries, and creating inclusive learning environments where individuals feel respected and valued. Learner protection means acting in learners' best interests at all times. Clear expectations, professional conduct, and appropriate responses to concerns help build trust and ensure learners feel confident to raise issues when support is needed.
                </p>
                <p>
                  Safeguarding principles apply across care, early years, and adult learning settings. While contexts may differ, the responsibility to recognise vulnerability, protect individuals from harm, and respond appropriately remains the same. At JS Training & Development Ltd, safeguarding is embedded into everyday practice. We are committed to creating safe, inclusive learning environments that support wellbeing and uphold professional standards.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 2. Quality Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[32px] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.05)] border border-gray-100"
          >
            <div className="p-2">
              <div className="rounded-[24px] overflow-hidden">
                <img src="/images/blogs/blog2.png" alt="Quality heart of training" className="w-full h-auto" />
              </div>
            </div>
            <div className="p-8 lg:p-12">
              <h3 className="text-[28px] font-bold text-gray-900 mb-6 leading-tight">
                Putting Quality at the Heart of Training and Assessment
              </h3>
              <div className="space-y-6 text-gray-500 text-[17px] leading-relaxed">
                <p>
                  Quality is central to effective education and training. For learners, it builds confidence that learning is meaningful, fair, and relevant. For organisations and employers, it provides assurance that training and assessment reflect genuine competence and professional standards. Effective training starts with clear expectations. Learners should understand what they are working towards, how they will be assessed, and what good performance looks like.
                </p>
                <p>
                  Well-structured programmes and consistent assessment approaches support engagement and help learners demonstrate their knowledge and skills confidently. Assessment plays a key role in confirming competence and progression. Good assessment practice focuses on evidence that reflects real learning and practice, rather than isolated tasks. Fair and consistent assessment supports learner confidence and helps ensure outcomes are reliable and credible.
                </p>
                <p>
                  Quality assurance underpins this process by supporting consistency, standardisation, and continuous improvement. Through review, feedback, and reflection, quality assurance helps maintain standards and ensures learners receive a comparable experience across programmes. At JS Training & Development Ltd, quality underpins everything we do. We are committed to delivering training and assessment that is fair, transparent, and consistently applied, supporting positive learner experiences and high professional standards.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 3 & 4. Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Staying Informed */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[32px] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col"
            >
              <div className="p-2">
                <div className="rounded-[24px] overflow-hidden aspect-[16/10]">
                  <img src="/images/blogs/blog3.png" alt="Staying Informed" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="p-8 pb-10 flex-grow">
                <h3 className="text-[22px] font-bold text-gray-900 mb-4 leading-tight">
                  Staying Informed: Why Sector Updates Matter in Care and Education
                </h3>
                <p className="text-gray-500 text-[16px] leading-relaxed mb-8">
                  This article will explore the importance of staying informed about sector developments across care and education, and how awareness of change supports good practice, quality, and workforce development.
                </p>
                <p className="text-gray-900 font-bold mb-0">Content coming soon.</p>
              </div>
            </motion.div>

            {/* IQA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[32px] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col"
            >
              <div className="p-2">
                <div className="rounded-[24px] overflow-hidden aspect-[16/10]">
                  <img src="/images/blogs/blog4.png" alt="IQA" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="p-8 pb-10 flex-grow">
                <h3 className="text-[22px] font-bold text-gray-900 mb-4 leading-tight">
                  The Role of Internal Quality Assurance in Maintaining Standards
                </h3>
                <p className="text-gray-500 text-[16px] leading-relaxed mb-8">
                  This article will consider the role of Internal Quality Assurance (IQA) in supporting consistency, fairness, and continuous improvement within training and assessment.
                </p>
                <p className="text-gray-900 font-bold mb-0">Content coming soon.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Blogs;
