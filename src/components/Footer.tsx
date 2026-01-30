import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#101828] text-white py-12">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
                    {/* Left Section: Logo & Tagline */}
                    <div className="md:col-span-5">
                        <Link to="/" className="inline-block">
                            <img
                                src="/images/branding/footer-logo.jpeg"
                                alt="JS Training & Development"
                                className="h-80 w-80 object-contain mix-blend-screen grayscale invert brightness-110 contrast-110"
                            />
                        </Link>
                    </div>

                    {/* Links Section - Middle & Right */}
                    <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
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
                        <div className="space-y-4">
                            <h3 className="text-white font-semibold text-[15px]">Accreditations & Compliance</h3>
                            <ul className="space-y-3">
                                <li className="text-gray-400 text-[13px] leading-relaxed flex items-start gap-2">
                                    <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-600 shrink-0" />
                                    Approved Centre with iCQ (Industry Qualifications)
                                </li>
                                <li className="text-gray-400 text-[13px] leading-relaxed flex items-start gap-2">
                                    <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-600 shrink-0" />
                                    UKPRN: 10100203
                                </li>
                                <li className="text-gray-400 text-[13px] leading-relaxed flex items-start gap-2">
                                    <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-600 shrink-0" />
                                    ICO Registered Data Controller (ZC065333)
                                </li>
                                <li className="text-gray-400 text-[13px] leading-relaxed flex items-start gap-2">
                                    <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-600 shrink-0" />
                                    Professional Indemnity & Public Liability Insurance (Hiscox)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Socials */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-gray-500 text-sm">
                    <p>© {currentYear} – All rights reserved.</p>
                    <div className="flex items-center space-x-6">
                        <a href="https://instagram.com/jstraininganddevelopment" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                            <Instagram size={20} />
                        </a>
                        <a href="https://x.com/JsTraining59004" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="X (formerly Twitter)">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/company/js-traininganddevelopment" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
