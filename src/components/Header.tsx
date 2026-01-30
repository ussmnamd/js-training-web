import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About us', path: '/about' },
        { name: 'Courses', path: '/courses' },
        { name: 'Services', path: '/services' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-white/90 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none shadow-sm lg:shadow-none py-3 lg:py-4'
                }`}
        >
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        {/* Using a placeholder for the logo text/image based on the upload */}
                        <div className="flex flex-col">
                            <Link to="/">
                                <img src="/images/branding/logo.jpg" alt="JS Training & Development" className="h-10 lg:h-20 w-auto object-contain max-w-[150px] lg:max-w-none" />
                            </Link>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex space-x-6" role="navigation" aria-label="Main navigation">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-gray-800 hover:text-primary font-medium text-[15px] transition-colors relative group ${isActive ? 'text-primary' : ''
                                        }`}
                                    aria-current={isActive ? 'page' : undefined}
                                >
                                    {link.name}
                                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transform transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                        }`}></span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-800 hover:text-primary focus:outline-none focus-visible:outline-accent"
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div
                    id="mobile-menu"
                    className="lg:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4 px-4 flex flex-col space-y-4 border-t border-gray-100"
                    role="navigation"
                    aria-label="Mobile navigation"
                >
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-gray-800 hover:text-primary font-medium text-lg ${isActive ? 'text-primary' : ''
                                    }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                aria-current={isActive ? 'page' : undefined}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
            )}
        </header>
    );
};
