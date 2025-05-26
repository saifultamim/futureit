const VideoModal = ({ isOpen, onClose, videoSrc }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-opacity-50 bg-gray-900 px-3">
          <div className="relative w-full lg:w-2/4 mx-auto bg-white  rounded-lg shadow-lg">
            <div className="relative rounded-lg">
              <button
                className="absolute -top-5 -right-2 p-2 text-white bg-red-600 rounded-full hover:bg-red-700 focus:outline-none focus:bg-red-700"
                onClick={onClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <div className="overflow-hidden rounded-lg">
                <iframe
                  width="100%"
                  // height="450"
                  className="h-52 lg:h-[400px]"
                  src={videoSrc + "?autoplay=1"}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoModal;
