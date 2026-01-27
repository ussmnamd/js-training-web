import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="About Us"
        description="Learn about JS Training & Development Ltd, our purpose, and our commitment to quality delivered with confidence in professional training."
      />
      {/* Hero Section */}
      <section className="py-12 lg:py-20 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-[64px] font-bold text-[#193388] leading-tight mb-6">
                  Our Purpose
                </h1>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Quality Delivered With Confidence
                </h2>
                <div className="space-y-6 text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl">
                  <p>
                    JS Training & Development Ltd is a UK-based training and development organisation led by an experienced education and quality professional with extensive expertise across health and social care, early years, and workforce development.
                  </p>
                  <p>
                    We were established to support learners, practitioners, and employers through high-quality training, assessment, and continuous professional development. Our work is grounded in strong sector knowledge, regulatory understanding, and an unwavering commitment to safeguarding, learner protection, and professional integrity.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Images */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[500px] lg:h-[600px] flex items-center justify-center"
            >
              {/* Background Gray Block */}
              <div className="absolute top-[10%] right-0 w-[80%] h-[80%] bg-[#f4f4f4] rounded-2xl -z-10" />

              {/* Top Overlapping Image */}
              <div className="absolute top-0 right-0 w-[70%] z-10">
                <img
                  src="/images/about-us/hero1.png"
                  alt="Students learning"
                  className="rounded-xl shadow-2xl w-full h-auto object-cover"
                />
              </div>

              {/* Bottom Overlapping Image */}
              <div className="absolute bottom-0 left-0 w-[70%] z-20">
                <img
                  src="/images/about-us/hero2.png"
                  alt="Workforce collaboration"
                  className="rounded-xl shadow-2xl w-full h-auto object-cover border-8 border-white"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Image in Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#f4f4f4] p-8 rounded-xl"
            >
              <img
                src="/images/about-us/whoarewe.png"
                alt="Who We Are - Team collaboration"
                className="rounded-lg shadow-sm w-full h-auto object-cover"
              />
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-[#193388]">Who We Are</h2>
              <p className="text-gray-600 text-[17px] leading-relaxed">
                We specialise in delivering regulated qualifications, bespoke training solutions, and quality assurance services that support competence, confidence, and compliance across key sectors. Our approach is professional, supportive, and learner-centred. We work closely with individuals and organisations to ensure assessment decisions are fair, valid, and reliable, while creating safe, inclusive learning environments where learners can succeed.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900">We are committed to:</h3>
                <ul className="space-y-3">
                  {[
                    "Learner-centred practice that supports achievement and progression",
                    "Fair, transparent, and consistent assessment decisions",
                    "Robust internal quality assurance and continuous improvement",
                    "Safeguarding, equality, diversity, and inclusion across all services",
                    "Practical, sector-relevant delivery aligned with current best practice"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600 text-[16px]">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-[42px] font-bold text-gray-900 mb-6 tracking-tight">
              Why Choose JS Training & <br className="hidden md:block" /> Development Ltd
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              By working with us, learners and organisations benefit from a trusted partner focused on quality, compliance, and meaningful outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                id: '01',
                title: 'Quality Delivered with Confidence',
                description: 'All training, assessment, and consultancy services are underpinned by robust quality assurance and sector expertise.'
              },
              {
                id: '02',
                title: 'Safeguarding & Learner Protection',
                description: 'We prioritise safe learning environments and uphold safeguarding responsibilities across all activities.'
              },
              {
                id: '03',
                title: 'Fair & Reliable Assessment',
                description: 'Assessment decisions are transparent, valid, and aligned with awarding organisation requirements.'
              },
              {
                id: '04',
                title: 'Regulated & Bespoke Solutions',
                description: 'We deliver regulated qualifications (subject to awarding organisation approval) and tailored solutions.'
              },
              {
                id: '05',
                title: 'Sector Expertise',
                description: 'Extensive experience across health and social care, early years, leadership, and quality assurance.'
              },
              {
                id: '06',
                title: 'Continuous Improvement',
                description: 'We are committed to reflective practice, professional development, and ongoing service improvement.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f8faff] rounded-2xl p-10 relative overflow-hidden group hover:shadow-lg transition-all duration-300 border border-blue-50/50"
              >
                <div className="relative z-10">
                  <span className="text-[40px] font-bold text-[#193388]/10 block mb-4 transition-colors group-hover:text-[#193388]/20">
                    {item.id}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {/* Subtle Decorative Circle */}
                <div className="absolute top-[-20%] left-[-10%] w-32 h-32 bg-[#193388]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>

          {/* EDI Declaration */}
          <div className="max-w-4xl pt-12 border-t border-gray-100">
            <p className="text-[13px] text-gray-900 font-bold mb-1">Equality, diversity & inclusion declaration:</p>
            <p className="text-[13px] text-gray-600">
              JS Training & Development Ltd is committed to equality, diversity, and inclusion and does not tolerate discrimination in any form.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
