import React from 'react';
import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 lg:pt-28 lg:pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-[42px] lg:text-[52px] font-bold text-[#193388] leading-[1.2] mb-6">
                What they say after using our services?
              </h1>
              <div className="flex items-center gap-2 text-lg lg:text-xl font-medium">
                <span className="text-gray-900">Client review</span>
                <span className="text-[#193388]">Matters!</span>
              </div>
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-[40px] overflow-hidden shadow-2xl shadow-blue-100/50 border border-gray-100">
                <img
                  src="/images/testimonials/testimonials_hero.png"
                  alt="Happy Professionals"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid Section */}
      <section className="py-12 bg-[#f8fbff]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-[#193388] font-bold text-lg lg:text-xl">
              Testimonials – coming soon!
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.1 }}
                className="bg-[#ebf0f5]/50 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/50 shadow-sm"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="bg-[#193388]/10 p-3 rounded-2xl">
                    <Quote className="text-[#193388]/30 w-10 h-10 fill-current" />
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-orange-400 fill-orange-400" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-900 font-bold text-xl lg:text-2xl mb-4">
                  Coming Soon!
                </p>
                <div className="h-4 w-2/3 bg-gray-200/50 rounded-full animate-pulse" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
