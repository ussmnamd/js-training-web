import React, { useState } from 'react';
import { Users, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

interface Course {
  id: number;
  title: string;
  category: string;
  duration: string;
  level: string;
  description: string;
  price?: string;
  image?: string;
}

const allCourses: Course[] = [
  {
    id: 1,
    title: 'Level 2 Diploma in Care (RQF)',
    category: 'Adult Care & Health Qualifications',
    level: '',
    duration: '',
    description: 'For individuals entering or working in adult care roles. Blended delivery | Workplace-based assessment',
    image: '/images/courses/card1.png'
  },
  {
    id: 2,
    title: 'Level 3 Diploma in Adult Care (RQF)',
    category: 'Adult Care & Health Qualifications',
    level: '',
    duration: '',
    description: 'For experienced care workers or all those with additional responsibilities. Blended delivery | Assessment of practice',
    image: '/images/courses/card2.png'
  },
  {
    id: 3,
    title: 'Level 4 Diploma in Adult Care (RQF)',
    category: 'Adult Care & Health Qualifications',
    level: '',
    duration: '',
    description: 'For senior practitioners and aspiring managers developing advanced practice and leadership skills within adult care settings. Blended delivery | Work-based assessment and professional discussion',
    image: '/images/courses/card3.png'
  },
  {
    id: 4,
    title: 'Level 5 Diploma in Leadership for Health & Social Care ....',
    category: 'Adult Care & Health Qualifications',
    level: '',
    duration: '',
    description: 'For managers and leaders responsible for service delivery, quality, and improvement. Blended delivery | Work-based projects and professional discussion',
    image: '/images/courses/card4.png'
  },
  {
    id: 5,
    title: 'Level 3 Certificate in Assessing Vocational...',
    category: 'Assessor, Quality Assurance & Teaching Qualifications',
    level: '',
    duration: '',
    description: 'For individuals assessing vocational competence and knowledge in work-based or training environments. Blended delivery | Assessment of practice',
    image: '/images/courses/card5.png'
  },
  {
    id: 6,
    title: 'Level 4 Award in Internal Quality Assurance of ....',
    category: 'Assessor, Quality Assurance & Teaching Qualifications',
    level: '',
    duration: '',
    description: 'For those responsible for monitoring and quality assuring assessment decisions. Blended delivery | Practical IQA activity',
    image: '/images/courses/card 6.png'
  },
  {
    id: 7,
    title: 'Level 3 Award in Education and Training (AET) (RQF)',
    category: 'Assessor, Quality Assurance & Teaching Qualifications',
    level: '',
    duration: '',
    description: 'For individuals new to teaching or training in the further education and adult learning sector. Blended delivery | Micro-teaching and reflective practice',
    image: '/images/courses/card7.png'
  },
  {
    id: 8,
    title: 'Level 4 Certificate in Education & Training (CET)...',
    category: 'Assessor, Quality Assurance & Teaching Qualifications',
    level: '',
    duration: '',
    description: 'For teachers and trainers with a wider teaching role and responsibility. Blended delivery | Teaching practice and assessment',
    image: '/images/courses/card8.png'
  },
  {
    id: 9,
    title: 'Level 5 Diploma in Education and Training (DET) (RQF)',
    category: 'Assessor, Quality Assurance & Teaching Qualifications',
    level: '',
    duration: '',
    description: 'For experienced teachers/ trainers seeking an advanced teaching qualification. Blended delivery | Teaching practice, professional discussion & reflective assignments',
    image: '/images/courses/card9.png'
  },
  {
    id: 10,
    title: 'Level 3 Diploma in Management (RQF)',
    category: 'Generic Management & Leadership Qualifications',
    level: '',
    duration: '',
    description: 'For aspiring supervisors and team leaders developing core management skills. Blended delivery | Work-based assessment',
    image: '/images/courses/card10.png'
  },
  {
    id: 11,
    title: 'Level 5 Diploma in Leadership and Management (RQF)',
    category: 'Generic Management & Leadership Qualifications',
    level: '',
    duration: '',
    description: 'For managers and leaders with responsibility for teams, resources, and performance. Blended delivery | Work-based projects and professional discussion',
    image: '/images/courses/card11.png'
  },
  {
    id: 12,
    title: 'Safeguarding (Adults & Children)',
    category: 'Short Courses',
    level: '',
    duration: '',
    description: 'Develops understanding of safeguarding responsibilities and appropriate responses. Online delivery | Knowledge-based assessment',
    image: '/images/courses/card12.png'
  },
  {
    id: 13,
    title: 'CPD and Bespoke Training & Consultancy',
    category: 'CPD and Bespoke Training & Consultancy',
    level: '',
    duration: '',
    description: 'Flexible, customised development solutions addressing organisational needs and workforce upskilling.',
    image: '/images/courses/card 13.png'
  },
];

const dataCategories = ['All', ...new Set(allCourses.map(course => course.category))];

const Courses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = allCourses.filter((course) => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch =
      searchQuery === '' ||
      course.title.toLowerCase().includes(searchLower) ||
      course.description.toLowerCase().includes(searchLower) ||
      course.category.toLowerCase().includes(searchLower);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Courses"
        description="Explore our range of professional qualifications and training courses in care, education, and management at JS Training & Development Ltd."
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#f8fbff] pb-20 pt-12 lg:pt-12">
        {/* Soft Wavy Background Component */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[150px] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl lg:pr-10"
            >
              <h1 className="text-[52px] lg:text-[68px] font-extrabold text-[#193388] leading-[1.1] mb-10 tracking-tight">
                Building Skills. <br />
                Assuring Quality. <br />
                Supporting Careers.
              </h1>
              <p className="text-gray-600 text-lg lg:text-[21px] leading-relaxed max-w-[480px]">
                Industry-relevant qualifications and training designed to meet sector standards and real-world practice.
              </p>
            </motion.div>

            {/* Right Side: Hero Image and Floating Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end mt-12 lg:mt-0"
            >
              <div className="relative w-full max-w-[550px]">
                {/* Main Hero Image - New Cutout */}
                <img
                  src="/images/courses/student.png"
                  alt="Student Thinking"
                  className="w-full h-auto object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                />

                {/* Floating Badge 1: 250k Students (Top Left) */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[22%] -left-[18%] z-20 bg-white/95 backdrop-blur-sm p-3 px-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-50 flex items-center gap-4 min-w-[180px]"
                >
                  <div className="w-10 h-10 bg-[#00B4D8] rounded-xl flex items-center justify-center shrink-0">
                    <Users className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-[17px]">250k</div>
                    <div className="text-[12px] text-gray-500 font-medium whitespace-nowrap">Assisted Student</div>
                  </div>
                </motion.div>

                {/* Floating Badge 2: Congratulations (Middle Right) */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[48%] -right-[15%] z-20 bg-white/95 backdrop-blur-sm p-3 px-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-50 flex items-center gap-4 min-w-[230px]"
                >
                  <div className="w-10 h-10 bg-[#FF7D61] rounded-xl flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-[16px]">Congratulations</div>
                    <div className="text-[12px] text-gray-500 font-medium">Your admission completed</div>
                  </div>
                </motion.div>

                {/* Floating Badge 3: Schedule (Bottom Left) */}
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-[20%] -left-[15%] z-20 bg-white/95 backdrop-blur-sm p-4 px-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-200 flex items-center gap-4 min-w-[260px]"
                >
                  <div className="w-11 h-11 bg-gray-100 rounded-full overflow-hidden border-2 border-green-500/20 shrink-0">
                    <img src="https://ui-avatars.com/api/?name=User+Experience&background=193388&color=fff" alt="User" />
                  </div>
                  <div>
                    <div className="font-bold text-[14px] text-gray-900 mb-0.5">User Experience Class</div>
                    <div className="text-[12px] text-gray-500 mb-1">Today at 12.00 PM</div>
                    <button className="text-[12px] font-bold text-[#193388] hover:underline">Join Now</button>
                  </div>
                </motion.div>

                {/* Decorative Pink Square Icon (Top Right) */}
                <div className="absolute top-[18%] right-[10%] bg-[#FF6B8B] p-3 px-4 rounded-[14px] shadow-lg transform rotate-12 z-0">
                  <div className="space-y-1">
                    <div className="h-0.5 w-6 bg-white/40 rounded" />
                    <div className="h-0.5 w-6 bg-white rounded" />
                    <div className="h-0.5 w-6 bg-white/60 rounded" />
                  </div>
                </div>

                {/* Background Soft Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-100/30 rounded-full blur-[120px] -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12">
        {/* Course Filter Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-6">
          <h2 className="text-[#193388] font-bold text-xl">Explore Courses</h2>
          <div className="w-full md:w-auto flex flex-col items-end gap-3">
            <div className="relative w-full md:w-[400px]">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-2.5 bg-[#f3f4f6] rounded-md text-sm border-none focus:ring-1 focus:ring-gray-300"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>
            <div className="flex gap-2 flex-wrap justify-end">
              {dataCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 text-[12px] font-medium rounded-full transition-all ${selectedCategory === cat
                    ? 'bg-[#193388] text-white shadow-md'
                    : 'bg-[#f3f4f6] text-gray-500 hover:bg-gray-200'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="text-gray-500 text-sm mb-12">
          Let's join our famous class, the knowledge provided will definitely be useful for you.
        </p>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="rounded-2xl overflow-hidden mb-6 aspect-[4/3] bg-gray-100">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="space-y-4">
                <span className="text-[#193388] font-bold text-[13px] tracking-wide block">
                  {course.category}
                </span>

                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-[20px] font-bold text-gray-900 leading-tight">
                    {course.title}
                  </h3>
                  <div className="mt-1 shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#193388" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>

                <p className="text-gray-500 text-[14px] leading-relaxed line-clamp-3">
                  {course.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-16">
          <div className="w-8 h-1.5 bg-[#193388] rounded-full" />
          <div className="w-1.5 h-1.5 bg-gray-200 rounded-full" />
        </div>

        {/* Delivery, Eligibility & Learning Journey Section */}
        <section className="py-12 border-t border-gray-100 mt-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-[42px] font-bold text-gray-900 mb-6 tracking-tight">
              Delivery, Eligibility & <br className="hidden md:block" /> Learning Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                id: '01',
                title: 'Delivery Method',
                description: 'Wording to reflect that delivery methods vary by programme and may include online learning and work-based assessment, in line with awarding organisation requirements.',
                bgColor: 'bg-[#f8faff]'
              },
              {
                id: '02',
                title: 'How Learning Works',
                description: 'A short, learner-friendly explanation of learning, assessment, and support (no hours or schedules).',
                bgColor: 'bg-white border-gray-100'
              },
              {
                id: '03',
                title: 'Eligibility',
                description: 'High-level eligibility wording only, with confirmation of full details at enquiry/ enrolment stage.',
                bgColor: 'bg-[#f8faff]'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${item.bgColor} rounded-2xl p-10 relative overflow-hidden group hover:shadow-lg transition-all duration-300 border border-blue-50/50`}
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
              </motion.div>
            ))}
          </div>

          {/* Awarding Organisation Declaration */}
          <div className="max-w-4xl pt-12 border-t border-gray-100">
            <p className="text-[13px] text-gray-900 font-bold mb-1">Awarding organisation declaration:</p>
            <p className="text-[13px] text-gray-600">
              Regulated qualifications are delivered subject to awarding organisation approval and ongoing compliance with awarding organisation requirements.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Courses;
