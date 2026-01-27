import React from 'react';
import { Lightbulb, Briefcase, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
    return (
        <section className="relative w-full min-h-[80vh] pt-24 pb-12 overflow-hidden bg-white">
            {/* Background Decorative Elements - Concentric Circles */}
            <div className="absolute top-[8%] left-[-5%] opacity-60 pointer-events-none z-0">
                <ConcentricCircles size={450} circles={5} />
            </div>

            <div id="hero-bottom-circles" className="absolute bottom-[-8%] right-[-5%] opacity-40 pointer-events-none">
                <ConcentricCircles size={600} circles={5} />
            </div>

            {/* Floating Dots */}
            <div className="absolute top-[12%] left-[5%] w-3 h-3 bg-[#193388] rounded-full opacity-60" />
            <div className="absolute bottom-[18%] left-[25%] w-5 h-5 bg-[#193388] rounded-full opacity-80" />
            <div className="absolute top-[200px] right-[10%] w-4 h-4 bg-[#193388] rounded-full opacity-60" />
            <div className="absolute bottom-[8%] right-[30%] w-3 h-3 bg-[#193388] rounded-full opacity-60" />

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 h-full">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    {/* Text Content */}
                    <div className="w-full lg:w-[55%] flex flex-col space-y-5 lg:pr-12 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl md:text-3xl lg:text-5xl font-bold leading-[1.15]">
                                <span className="text-[#193388] block">Empowering Learners</span>
                                <span className="text-[#193388] block">And Professionals</span>
                                <span className="text-gray-900 block">In Care, Education &</span>
                                <span className="text-gray-900 block">Workforce Development</span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-gray-500 text-lg md:text-[19px] max-w-xl leading-relaxed"
                        >
                            High-quality training, qualifications, professional development and quality
                            assurance services designed to support individuals and organisations across
                            the UK.
                        </motion.p>
                    </div>

                    {/* Image / Graphic */}
                    <div className="w-full lg:w-[45%] relative mt-10 lg:mt-0 flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            {/* Decorative blue dot behind image */}
                            <div className="absolute -left-4 bottom-[20%] w-10 h-10 bg-[#193388] rounded-full z-20" />

                            {/* Main Circular Image with Blue Border */}
                            <div className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] rounded-full overflow-hidden border-[12px] border-[#193388]/90 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                                    alt="Professional training environment"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Outer thin blue line circle */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-primary/20 rounded-full" />
                        </motion.div>
                    </div>
                </div>

                {/* Feature Badges - Bottom Row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-wrap items-center gap-x-12 gap-y-6 mt-10 md:mt-12"
                >
                    <FeatureBadge
                        icon={<Lightbulb className="text-yellow-500" size={24} />}
                        text="Experienced sector professionals"
                    />
                    <FeatureBadge
                        icon={<Briefcase className="text-orange-600" size={24} />}
                        text="Purpose driven- quality training"
                    />
                    <FeatureBadge
                        icon={<Globe className="text-pink-500" size={24} />}
                        text="UK-wide provision"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export const ConcentricCircles = ({ size, circles = 5 }: { size: number, circles?: number }) => {
    const scales = Array.from({ length: circles }, (_, i) => 1 - (i * (1 / circles)));
    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            {scales.map((scale, i) => (
                <circle
                    key={i}
                    cx={size / 2}
                    cy={size / 2}
                    r={(size / 2 - 2) * scale}
                    stroke="#193388"
                    strokeWidth="1"
                    strokeOpacity={0.4 - (i * 0.05)}
                />
            ))}
        </svg>
    );
};

const FeatureBadge = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
    <div className="flex items-center space-x-3">
        <div className="flex-shrink-0">
            {icon}
        </div>
        <span className="text-gray-500 font-medium text-base md:text-lg">{text}</span>
    </div>
);

