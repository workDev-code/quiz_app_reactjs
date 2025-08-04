export default function Loading(){
    return(
         <div className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800">
                <div className="flex flex-col items-center gap-4">
                    {/* Spinner */}
                    <div className="relative flex items-center justify-center">
                        <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
                    </div>
                    {/* Loading Text */}
                    <div className="text-white text-2xl md:text-3xl font-semibold tracking-wide animate-pulse">
                        Loading Questions...
                    </div>
                    {/* Subtext for better UX */}
                    <div className="text-gray-200 text-sm md:text-base font-light opacity-80">
                        Please wait while we fetch your questions.
                    </div>
                </div>
            </div>
    );
}