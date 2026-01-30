import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const Terms = () => {
    return (
        <div className="min-h-screen bg-white pt-32 lg:pt-28 pb-16">
            <SEO
                title="Terms & Conditions"
                description="Read the terms and conditions for using JS Training & Development Ltd services."
            />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-[900px] mx-auto px-4"
            >
                <h1 className="text-3xl font-bold text-[#193388] mb-8">Terms & Conditions</h1>

                <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                        <p>
                            Welcome to JS Training & Development Ltd. By accessing and using our website and services,
                            you agree to be bound by these Terms & Conditions. Please read them carefully.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">2. Services</h2>
                        <p>
                            JS Training & Development Ltd provides education, training, assessment, and professional
                            development services. Our courses and qualifications are delivered in accordance with
                            awarding organisation requirements and regulatory standards.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
                        <p>
                            All content on this website, including text, graphics, logos, and course materials,
                            is the property of JS Training & Development Ltd and is protected by copyright law.
                            Unauthorised use is prohibited.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">4. Limitation of Liability</h2>
                        <p>
                            While we strive to provide accurate and up-to-date information, JS Training & Development Ltd
                            makes no warranties regarding the completeness or accuracy of the content on this website.
                            We shall not be liable for any indirect, incidental, or consequential damages.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">5. Contact</h2>
                        <p>
                            For any questions regarding these terms, please contact us at{' '}
                            <a href="mailto:info@jstraininganddevelopment.co.uk" className="text-[#193388] hover:underline">
                                info@jstraininganddevelopment.co.uk
                            </a>
                        </p>
                    </section>
                </div>
            </motion.div>
        </div>
    );
};

export default Terms;
