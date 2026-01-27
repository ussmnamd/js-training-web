export const Loading = () => {
    return (
        <div className="min-h-[40vh] flex items-center justify-center">
            <div className="relative">
                <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            </div>
        </div>
    );
};

export default Loading;
