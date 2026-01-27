import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Program {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

const programs: Program[] = [
  {
    id: 1,
    category: 'Levels 1–5 | Workforce-focused | Career progression',
    title: 'Health & Social Care',
    description: 'Qualifications and professional programmes supporting learners from entry into the sector through to leadership and management roles.',
    image: '/images/cards/card1.png'
  },
  {
    id: 2,
    category: 'Levels 1–5',
    title: 'Early Years Education',
    description: 'Programmes designed for early years practitioners and leaders, supporting high-quality practice, safeguarding, and child development.',
    image: '/images/cards/card2.png'
  },
  {
    id: 3,
    category: 'Levels 1–5',
    title: 'Leadership & Management',
    description: 'Leadership and management programmes supporting individuals with responsibility for teams, services, and organisational delivery.',
    image: '/images/cards/card3.png'
  },
  {
    id: 4,
    category: 'Assessor qualifications | IQA qualifications | Quality practice',
    title: 'Training, Assessment & Quality Assurance',
    description: 'Programmes supporting those involved in training delivery, assessment, and internal quality assurance.',
    image: '/images/cards/card4.png'
  },
  {
    id: 5,
    category: 'Safeguarding | Compliance | Professional skills',
    title: 'Continuing Professional Development (CPD)',
    description: 'Standard and bespoke CPD programmes supporting ongoing professional development across care, education, and leadership.',
    image: '/images/cards/card5.png'
  },
  {
    id: 6,
    category: 'Quality improvement | Compliance support | Sector expertise',
    title: 'Bespoke Training & Consultancy',
    description: 'Tailored training and consultancy services designed to meet organisational and workforce development needs.',
    image: '/images/cards/card6.png'
  },
];

export const ProgramsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-left mb-8">
          <span className="text-[#193388] font-bold tracking-tight text-[16px] block mb-2">Explore Programs</span>
          <h2 className="text-4xl lg:text-[42px] font-bold text-gray-900 mb-6 tracking-tight">
            JS Training & Development Ltd
          </h2>
          <p className="text-gray-500 text-lg md:text-[19px] max-w-[900px] leading-relaxed font-medium">
            Professionally delivered courses built to meet employer needs, regulatory standards, and learner progression goals.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setActiveIndex(Math.floor(index / 2))}
              className="bg-white rounded-[20px] shadow-[0_15px_60px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_60px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden flex flex-col h-full border border-gray-100 group"
            >
              <div className="h-[280px] overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <span className="text-[#193388] text-[15px] font-bold mb-5 block leading-tight uppercase tracking-tight">
                  {program.category}
                </span>
                <h3 className="text-[26px] font-bold text-gray-900 mb-5 tracking-tight leading-tight">
                  {program.title}
                </h3>
                <p className="text-gray-500 text-[17px] leading-relaxed font-normal">
                  {program.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Interactive Element */}
        <div className="flex flex-col items-center mt-12 space-y-6">
          {/* Indicators */}
          <div className="flex items-center space-x-3">
            {[0, 1, 2].map((idx) => (
              <div
                key={idx}
                className={`h-[7px] rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-10 bg-[#193388]' : 'w-[7px] bg-gray-200'}`}
              />
            ))}
          </div>

          {/* Explore Button */}
          <Link
            to="/courses"
            className="inline-flex items-center justify-center border border-gray-200 px-6 py-3 rounded-lg text-gray-700 font-bold text-[13px] uppercase tracking-wide hover:bg-gray-50 transition-all hover:border-gray-300 shadow-sm"
          >
            Explore All Programs
          </Link>
        </div>
        {/* Our Approach Section */}
        <div className="mt-16 pt-12 border-t border-gray-100">
          <div className="text-center mb-8">
            <span className="text-[#193388] font-bold tracking-wider text-[15px] block mb-2">Our Approach</span>
            <h2 className="text-3xl lg:text-[40px] font-bold text-gray-900 mb-6 tracking-tight">
              Quality-led. Learner-centred. Sector-focused.
            </h2>
            <p className="text-gray-500 text-lg md:text-[19px] max-w-4xl mx-auto leading-relaxed font-medium">
              Our work is guided by strong sector knowledge, regulatory understanding, and a clear commitment to learner success and safeguarding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ApproachCard
              title="Learner-Centred Delivery"
              description="We place learners at the heart of everything we do, providing clear guidance, fair assessment, and tailored support to help individuals succeed confidently."
            />
            <ApproachCard
              title="Quality & Compliance First"
              description="All training, assessment, and quality assurance is delivered in line with awarding organisation requirements, sector standards, and best practice."
            />
            <ApproachCard
              title="Safeguarding & Inclusion"
              description="We are committed to safeguarding, equality, diversity, and inclusion, ensuring safe, respectful, and supportive learning environments for all."
            />
            <ApproachCard
              title="Continuous Improvement"
              description="Our approach is rooted in reflection, standardisation, and ongoing improvement to ensure high-quality outcomes for learners and organisations."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ApproachCard = ({ title, description }: { title: string, description: string }) => (
  <div className="bg-[#f8faff] rounded-xl p-8 flex flex-col items-center text-center h-full border border-blue-50/50">
    <h3 className="text-[#193388] font-bold text-lg mb-4 leading-tight">
      {title}
    </h3>
    <p className="text-gray-500 text-[15px] leading-relaxed">
      {description}
    </p>
  </div>
);
