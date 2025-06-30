import React, { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";

const VideoContent = ({ videoLink, onWatchPercentUpdate }) => {
  const iframeRef = useRef(null);
  const playerRef = useRef(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);

    // Cleanup existing player
    if (playerRef.current) {
      playerRef.current.unload().catch(() => {});
      playerRef.current = null;
    }

    if (videoLink && iframeRef.current) {
      try {
        const player = new Player(iframeRef.current);
        playerRef.current = player;

        player
          .getDuration()
          .then((duration) => {
            player.on("timeupdate", ({ seconds }) => {
              if (duration > 0 && typeof onWatchPercentUpdate === "function") {
                onWatchPercentUpdate((seconds / duration) * 100);
              }
            });
          })
          .catch((err) => {
            console.error("Failed to get duration:", err);
            setError(true);
          });

        player.on("error", (err) => {
          console.error("Vimeo player error:", err);
          setError(true);
        });
      } catch (err) {
        console.error("Player initialization error:", err);
        setError(true);
      }
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.unload().catch(() => {});
        playerRef.current = null;
      }
    };
  }, [videoLink]);

  return (
    <div className="w-full h-0 pb-[56.25%] relative">
      {!error && videoLink ? (
        <iframe
          ref={iframeRef}
          className="absolute top-0 left-0 w-full h-full rounded"
          src={videoLink}
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Vimeo video"
        />
      ) : (
        <div className="w-full h-0 pb-[56.25%] relative">
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
            <div className="text-center p-6 max-w-md">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-gray-400 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Video Unavailable
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                This video cannot be played right now. Please try refreshing the
                page.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-[#EE2C73] text-white rounded-md hover:bg-[#EE2C73]/80 transition-colors text-sm"
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoContent;
