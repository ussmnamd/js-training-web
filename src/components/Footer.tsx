import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Facebook, Github, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#101828] text-white py-12">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
                    {/* Left Section: Logo & Tagline */}
                    <div className="md:col-span-4 space-y-8">
                        <Link to="/" className="inline-block bg-white p-2 rounded-sm mt-1">
                            <img src="/images/branding/logo.jpg" alt="JS Training & Development" className="h-16 w-auto object-contain" />
                        </Link>
                        <p className="text-gray-400 text-[15px] leading-relaxed max-w-xs">
                            JS Training & Development Ltd – Quality delivered or delivers with confidence.
                        </p>
                    </div>

                    {/* Links Section - Middle & Right */}
                    <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="space-y-4">
                            <ul className="space-y-3">
                                <li><Link to="/" className="text-gray-300 hover:text-white transition-colors text-[15px]">Home</Link></li>
                                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors text-[15px]">About Us</Link></li>
                                <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors text-[15px]">Courses</Link></li>
                                <li><Link to="/testimonials" className="text-gray-300 hover:text-white transition-colors text-[15px]">Testimonials</Link></li>
                                <li><Link to="/blogs" className="text-gray-300 hover:text-white transition-colors text-[15px]">Blogs</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <ul className="space-y-3">
                                <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors text-[15px]">Terms</Link></li>
                                <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors text-[15px]">Privacy</Link></li>
                                <li><Link to="/cookies" className="text-gray-300 hover:text-white transition-colors text-[15px]">Cookies</Link></li>
                                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-[15px]">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Socials */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-gray-500 text-sm">
                    <p>© {currentYear} – All rights reserved.</p>
                    <div className="flex items-center space-x-6">
                        <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Globe size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
