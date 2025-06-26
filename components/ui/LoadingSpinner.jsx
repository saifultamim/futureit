const LoadingSpinner = () => {
  return (
    // <div className="flex justify-center items-center w-full h-full">
    //   <div
    //     className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"
    //     role="status"
    //     aria-label="Loading"
    //   >
    //     <span className="sr-only">Loading...</span>
    //   </div>
    // </div>

    // <div className="absolute inset-0 flex items-center justify-center bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm z-50">
    //   <div className="flex flex-col items-center gap-3">
    //     <div className="w-12 h-12 rounded-full animate-spin border-4 border-dashed border-pink-500 border-t-transparent" />
    //     <span className="text-sm text-gray-500 dark:text-gray-400">
    //       Loading...
    //     </span>
    //   </div>
    // </div>

    <div className="absolute inset-0 flex items-center justify-center bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm z-50">
      <div className="w-12 h-12 rounded-full animate-spin border-4 border-dashed border-pink-500 border-t-transparent"></div>
    </div>
  );
};

export default LoadingSpinner;
