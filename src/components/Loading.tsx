export const Loading = () => {
    return (
        <div className="min-h-[40vh] flex flex-col items-center justify-center gap-4" role="status" aria-live="polite">
            <div className="relative">
                <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            </div>
            <span className="sr-only">Loading...</span>
            <span className="text-gray-500 font-medium animate-pulse">Loading...</span>
        </div>
    );
};

export default Loading;
