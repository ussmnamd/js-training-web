import React from 'react';
import { Link } from 'react-router-dom';

export const TestimonialsSection: React.FC = () => {
    return (
        <section className="py-12 bg-[#f8faff]">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
                <div className="text-center max-w-4xl mx-auto space-y-8">
                    <h2 className="text-3xl lg:text-[38px] font-bold text-gray-900 tracking-tight">
                        What People Value About Our Approach
                    </h2>

                    <div className="space-y-6">
                        <p className="text-xl md:text-2xl lg:text-[24px] text-gray-700 leading-relaxed font-medium italic">
                            "JS Training & Development brings a strong commitment to quality, learner support, and professional standards. Their approach is thoughtful, well-informed, and clearly rooted in sector experience."
                        </p>

                        <div className="space-y-1 mt-6">
                            <h4 className="text-[#193388] font-bold text-lg">Rita O'Sullivan</h4>
                            <p className="text-gray-500 font-medium tracking-wide">Sector Specialist</p>
                        </div>
                    </div>

                    <div className="pt-2">
                        <Link
                            to="/testimonials"
                            className="inline-flex items-center justify-center border border-[#193388]/30 px-10 py-4 rounded-full text-[#193388] font-bold text-[15px] hover:bg-[#193388] hover:text-white transition-all duration-300 shadow-sm"
                        >
                            See more Testimonials
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
