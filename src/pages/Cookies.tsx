import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const Cookies = () => {
    return (
        <div className="min-h-screen bg-white pt-32 lg:pt-28 pb-16">
            <SEO
                title="Cookie Policy"
                description="Learn about how JS Training & Development Ltd uses cookies on our website."
            />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-[900px] mx-auto px-4"
            >
                <h1 className="text-3xl font-bold text-[#193388] mb-8">Cookie Policy</h1>

                <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
                        <p>
                            Cookies are small text files that are placed on your device when you visit a website.
                            They are widely used to make websites work more efficiently and provide information
                            to website owners.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">2. Cookies We Use</h2>
                        <p>Our website uses the following types of cookies:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>
                                <strong>Essential Cookies:</strong> These are necessary for the website to function
                                and cannot be switched off. They are usually set in response to actions you take,
                                such as setting privacy preferences or filling in forms.
                            </li>
                            <li>
                                <strong>Analytics Cookies:</strong> These help us understand how visitors interact
                                with our website by collecting and reporting information anonymously.
                            </li>
                            <li>
                                <strong>Third-Party Cookies:</strong> We use Google reCAPTCHA to protect our contact
                                form from spam, which may set cookies on your device.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">3. Managing Cookies</h2>
                        <p>
                            Most web browsers allow you to control cookies through their settings. You can set
                            your browser to refuse cookies or delete certain cookies. However, if you block or
                            delete cookies, some features of our website may not function properly.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">4. Contact Us</h2>
                        <p>
                            If you have any questions about our use of cookies, please contact us at{' '}
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

export default Cookies;
