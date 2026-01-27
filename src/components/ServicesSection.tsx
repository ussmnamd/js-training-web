import React, { useState } from 'react';
import { HeartPulse, Baby, ClipboardCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const ServicesSection: React.FC = () => {
    const [activeCard, setActiveCard] = useState<number>(0);

    const services = [
        {
            title: "Health & Social Care",
            description: "Industry-relevant qualifications supporting care professionals at every stage of their career.",
            icon: HeartPulse
        },
        {
            title: "Early Years & Education",
            description: "Specialist programmes designed for childcare practitioners, leaders, and managers.",
            icon: Baby
        },
        {
            title: "Quality, Assessment & Compliance",
            description: "Training, assessment and quality assurance services designed to support assessor practice, internal quality assurance, and compliance.",
            icon: ClipboardCheck
        }
    ];

    return (
        <section className="py-12 bg-white relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <span className="text-[#193388] font-bold tracking-wider text-sm uppercase">Our Core Services</span>
                    <h2 className="text-3xl lg:text-[38px] font-bold text-gray-900 mt-2 max-w-3xl mx-auto leading-tight">
                        Delivering high-quality training, assessment, and
                        quality assurance across regulated sectors.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        const isActive = activeCard === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onMouseEnter={() => setActiveCard(index)}
                                className={`rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 cursor-default border border-gray-100 flex flex-col h-full ${isActive ? 'bg-[#193388] text-white' : 'bg-white text-gray-900'
                                    }`}
                            >
                                <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 ${isActive ? 'bg-white/20 backdrop-blur-sm' : 'bg-blue-50'
                                    }`}>
                                    <Icon className={`w-8 h-8 ${isActive ? 'text-white' : 'text-[#193388]'}`} />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                                <p className={`leading-relaxed transition-colors duration-300 ${isActive ? 'text-blue-50' : 'text-gray-600'
                                    }`}>
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Interactive Indicators */}
                <div className="flex justify-center mt-8 space-x-2">
                    {services.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 rounded-full transition-all duration-300 ${activeCard === index
                                ? 'w-8 bg-[#193388]'
                                : 'w-2 bg-gray-200'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

