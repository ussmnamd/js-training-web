import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound = () => {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <SEO title="404 - Page Not Found" />
            <div className="text-center">
                <h1 className="text-9xl font-bold text-blue-600">404</h1>
                <h2 className="text-3xl font-semibold text-gray-900 mt-4 mb-2">Page Not Found</h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                    <Home size={20} />
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
