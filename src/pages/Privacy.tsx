import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const Privacy = () => {
    return (
        <div className="min-h-screen bg-white pt-32 lg:pt-28 pb-16">
            <SEO
                title="Privacy Policy"
                description="Read how JS Training & Development Ltd handles and protects your personal data."
            />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-[900px] mx-auto px-4"
            >
                <h1 className="text-3xl font-bold text-[#193388] mb-8">Privacy Policy</h1>

                <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">1. Data Controller</h2>
                        <p>
                            JS Training & Development Ltd is the data controller for personal information collected
                            through this website. We are registered with the Information Commissioner's Office (ICO)
                            as a Data Controller (Registration Number: ZC065333).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                        <p>
                            We collect personal information that you voluntarily provide to us, including:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Name and contact details (email address, phone number)</li>
                            <li>Enquiry details submitted through our contact form</li>
                            <li>Course enrolment information</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                        <p>
                            We use your personal information to:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Respond to your enquiries</li>
                            <li>Process course enrolments and deliver training services</li>
                            <li>Comply with legal and regulatory obligations</li>
                            <li>Send relevant communications about our services (with your consent)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                        <p>
                            We implement appropriate technical and organisational measures to protect your personal
                            data against unauthorised access, alteration, disclosure, or destruction.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
                        <p>
                            Under data protection law, you have the right to access, rectify, or erase your personal data.
                            To exercise these rights, contact us at{' '}
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

export default Privacy;
