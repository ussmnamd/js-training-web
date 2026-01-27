import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
}

const SEO = ({ title, description, keywords }: SEOProps) => {
    const location = useLocation();

    useEffect(() => {
        const baseTitle = "JS Training & Development Ltd";
        const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle;
        document.title = fullTitle;

        // Update Meta Description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description || "High-quality training, qualifications, and professional development services for care, education & workforce development across the UK.");
        }

        // Update Meta Keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.setAttribute('name', 'keywords');
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute('content', keywords || "training, qualifications, professional development, UK, JS training");

        // OpenGraph Tags
        const updateOG = (property: string, content: string) => {
            let el = document.querySelector(`meta[property="${property}"]`);
            if (!el) {
                el = document.createElement('meta');
                el.setAttribute('property', property);
                document.head.appendChild(el);
            }
            el.setAttribute('content', content);
        };

        updateOG('og:title', fullTitle);
        updateOG('og:description', description || "High-quality training, qualifications, and professional development services.");
        updateOG('og:url', window.location.origin + location.pathname);
        updateOG('og:type', 'website');
        updateOG('og:image', '/images/branding/logo.jpg');

    }, [title, description, keywords, location]);

    return null;
};

export default SEO;
