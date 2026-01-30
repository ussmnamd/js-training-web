import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

interface Blog {
  id: number;
  title: string;
  teaser: string;
  content: string[];
  image: string;
  isGrid?: boolean;
  comingSoon?: boolean;
}

const blogData: Blog[] = [
  {
    id: 1,
    title: "Safeguarding and Learner Protection In Education and Training",
    teaser: "Safeguarding and learner protection are fundamental responsibilities within education and training, ensuring learners are safe, supported, and treated with dignity.",
    content: [
      "Safeguarding and learner protection are fundamental responsibilities within education and training. JS Training & Development Ltd has a duty of care to ensure learners are safe, supported, and treated with dignity and respect throughout their learning journey. Safeguarding applies to all learners and includes protection from harm, neglect, exploitation, bullying, harassment, and discrimination.",
      "It also involves promoting emotional wellbeing, maintaining professional boundaries, and creating inclusive learning environments where individuals feel respected and valued. Learner protection means acting in learners' best interests at all times. Clear expectations, professional conduct, and appropriate responses to concerns help build trust and ensure learners feel confident to raise issues when support is needed.",
      "Safeguarding principles apply across care, early years, and adult learning settings. While contexts may differ, the responsibility to recognise vulnerability, protect individuals from harm, and respond appropriately remains the same. At JS Training & Development Ltd, safeguarding is embedded into everyday practice. We are committed to creating safe, inclusive learning environments that support wellbeing and uphold professional standards."
    ],
    image: "/images/blogs/blog1.png"
  },
  {
    id: 2,
    title: "Putting Quality at the Heart of Training and Assessment",
    teaser: "Quality is central to effective education and training, building confidence that learning is meaningful, fair, and relevant for both learners and employers.",
    content: [
      "Quality is central to effective education and training. For learners, it builds confidence that learning is meaningful, fair, and relevant. For organisations and employers, it provides assurance that training and assessment reflect genuine competence and professional standards. Effective training starts with clear expectations. Learners should understand what they are working towards, how they will be assessed, and what good performance looks like.",
      "Well-structured programmes and consistent assessment approaches support engagement and help learners demonstrate their knowledge and skills confidently. Assessment plays a key role in confirming competence and progression. Good assessment practice focuses on evidence that reflects real learning and practice, rather than isolated tasks. Fair and consistent assessment supports learner confidence and helps ensure outcomes are reliable and credible.",
      "Quality assurance underpins this process by supporting consistency, standardisation, and continuous improvement. Through review, feedback, and reflection, quality assurance helps maintain standards and ensures learners receive a comparable experience across programmes. At JS Training & Development Ltd, quality underpins everything we do. We are committed to delivering training and assessment that is fair, transparent, and consistently applied, supporting positive learner experiences and high professional standards."
    ],
    image: "/images/blogs/blog2.png"
  },
  {
    id: 3,
    title: "Staying Informed: Why Sector Updates Matter in Care and Education",
    teaser: "This article will explore the importance of staying informed about sector developments across care and education and how awareness supports good practice.",
    content: [],
    image: "/images/blogs/blog3.png",
    isGrid: true,
    comingSoon: true
  },
  {
    id: 4,
    title: "The Role of Internal Quality Assurance in Maintaining Standards",
    teaser: "This article will consider the role of Internal Quality Assurance (IQA) in supporting consistency, fairness, and continuous improvement within assessment.",
    content: [],
    image: "/images/blogs/blog4.png",
    isGrid: true,
    comingSoon: true
  }
];

const Blogs: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Insights & Updates"
        description="Stay informed with insights, guidance, and updates from across the education and care sectors by JS Training & Development Ltd."
      />
      {/* Prominent Blog Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden bg-white">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Concentric Circles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] rounded-full border border-[#193388]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.08, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className="absolute -top-[15%] -right-[10%] w-[800px] h-[800px] rounded-full border border-[#193388]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
            className="absolute -top-[20%] -right-[15%] w-[1000px] h-[1000px] rounded-full border border-[#193388]"
          />

          {/* Decorative Dots Grid */}
          <div className="absolute top-1/4 left-10 opacity-20">
            <div className="grid grid-cols-6 gap-3">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#193388]" />
              ))}
            </div>
          </div>
          <div className="absolute bottom-1/4 right-10 opacity-20">
            <div className="grid grid-cols-4 gap-4">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-[#193388]" />
              ))}
            </div>
          </div>

          {/* Floating Subtle Blobs */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-[5%] w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10"
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-[#193388] animate-pulse" />
                <span className="text-[#193388] font-bold text-sm tracking-wide uppercase">Knowledge Hub</span>
              </motion.div>

              <h1 className="text-[48px] lg:text-[64px] font-bold text-gray-900 leading-[1.1] mb-8 tracking-tight">
                Insights, guidance and <br />
                <span className="text-[#193388] relative">
                  updates
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                    <path d="M0 7C20 7 30 1 50 1C70 1 80 7 100 7" stroke="#193388" strokeWidth="2" fill="none" opacity="0.3" />
                  </svg>
                </span> from the sector
              </h1>
              <p className="text-gray-600 text-xl lg:text-[22px] leading-relaxed mb-10 max-w-xl">
                We share practical insights, guidance, and updates drawn from sector experience and regulatory understanding.
              </p>
            </motion.div>

            {/* Right Content - Hero Image with Decoration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              {/* Image Frame Decoration */}
              <div className="absolute -inset-4 border-2 border-dashed border-blue-100 rounded-[48px] -z-10 animate-[spin_20s_linear_infinite] opacity-50" />

              <div className="rounded-[40px] overflow-hidden shadow-[0_48px_80px_-16px_rgba(25,51,136,0.15)] border-4 border-white relative z-10 transition-transform hover:scale-[1.02] duration-500">
                <img
                  src="/images/blogs/bloghero1.png"
                  alt="Remote Learning and Insights"
                  className="w-full h-auto object-cover"
                />

                {/* Floating Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#193388]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Expert Insights</p>
                      <p className="text-xs text-gray-500">Updated weekly</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div id="blogs" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pb-20 scroll-mt-32">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-gray-900 font-bold text-2xl">Our Blogs</h2>
        </div>

        <div className="space-y-12">
          {/* Render Full Width Blogs */}
          {blogData.filter(b => !b.isGrid).map((blog) => (
            <motion.div
              key={blog.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[32px] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.05)] border border-gray-100 group"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="lg:w-1/3 p-2 relative group-hover:scale-[1.01] transition-transform duration-500">
                  <div className="absolute top-[-2%] right-[-2%] w-[40%] h-[60%] bg-blue-50/50 rounded-[40px] -z-10 blur-2xl group-hover:bg-blue-100/50 transition-colors duration-500" />
                  <div className="absolute bottom-[-5%] left-[-2%] w-[30%] h-[40%] bg-blue-100/30 rounded-full -z-10 blur-3xl" />

                  <div className="absolute -top-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="grid grid-cols-4 gap-2">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#193388]" />
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[24px] overflow-hidden relative shadow-lg h-full min-h-[240px]">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-2/3 p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-[28px] font-bold text-gray-900 mb-6 leading-tight group-hover:text-[#193388] transition-colors">
                    {blog.title}
                  </h3>

                  <p className={`text-gray-500 text-[17px] leading-relaxed mb-6 ${expandedId === blog.id ? 'hidden' : 'block'}`}>
                    {blog.teaser}
                  </p>

                  <AnimatePresence>
                    {expandedId === blog.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-8 text-gray-500 text-[17px] leading-relaxed mb-8"
                      >
                        {blog.content.map((p, idx) => (
                          <p key={idx}>{p}</p>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => toggleExpand(blog.id)}
                    className="self-start px-6 py-2.5 rounded-full border-2 border-[#193388] text-[#193388] font-bold hover:bg-[#193388] hover:text-white transition-all active:scale-95"
                  >
                    {expandedId === blog.id ? 'Show Less' : 'Read More'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Render Grid Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogData.filter(b => b.isGrid).map((blog) => (
              <motion.div
                key={blog.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[32px] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col group"
              >
                <div className="p-2 relative overflow-visible">
                  <div className="absolute -top-3 -right-3 w-16 h-16 bg-blue-50 rounded-2xl -z-10 rotate-12 group-hover:rotate-45 transition-transform duration-500" />
                  <div className="rounded-[24px] overflow-hidden aspect-[16/10] relative shadow-md">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                </div>
                <div className="p-8 pb-10 flex-grow">
                  <h3 className="text-[22px] font-bold text-gray-900 mb-4 leading-tight group-hover:text-[#193388] transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-500 text-[16px] leading-relaxed mb-8">
                    {blog.teaser}
                  </p>
                  {blog.comingSoon ? (
                    <p className="text-gray-900 font-bold mb-0 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                      Content coming soon
                    </p>
                  ) : (
                    <button
                      onClick={() => toggleExpand(blog.id)}
                      className="px-6 py-2 rounded-full border border-[#193388] text-[#193388] font-bold hover:bg-[#193388] hover:text-white transition-all"
                    >
                      {expandedId === blog.id ? 'Show Less' : 'Read More'}
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div >
  );
};

export default Blogs;
