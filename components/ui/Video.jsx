// 'use client'
// import { useEffect, useRef } from "react";

// const Video = ({ videoUrl }) => {
//   const iframeRef = useRef(null);

//   useEffect(() => {
//     const iframeElement = iframeRef.current;

//     if (iframeElement) {
//       iframeElement.src = videoUrl + "?autoplay=1";
//     }
//   }, [videoUrl]);

//   return (
//     <div
//       className="relative w-full"
//       style={{ paddingTop: "56.25%" /* 16:9 Aspect Ratio */ }}
//     >
//       <iframe
//         ref={iframeRef}
//         width="100%"
//         height="100%"
//         className="absolute top-0 left-0 border shadow-lg rounded-xl"
//         src={videoUrl + "?autoplay=1"}
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//         style={{ borderRadius: "0.75rem" }}
//       ></iframe>
//     </div>
//   );
// };

// export default Video;
'use client'
import { useEffect, useRef } from "react";

const VideoPlayer = ({ videoUrl }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframeElement = iframeRef.current;

    if (iframeElement) {
      iframeElement.src = videoUrl + "?autoplay=1";
    }
  }, [videoUrl]);

  return (
    <div
      className="relative w-full"
      style={{ paddingTop: "56.25%" /* 16:9 Aspect Ratio */ }}
    >
      <iframe
        ref={iframeRef}
        width="100%"
        height="100%"
        className="absolute top-0 left-0 border shadow-lg rounded-xl"
        src={videoUrl + "?autoplay=1"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ borderRadius: "0.75rem" }}
      ></iframe>
    </div>
  );
};

export default VideoPlayer;