import { useState } from "react";

const VideoPopup = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <div className="relative">
      {/* Image that triggers the video */}
      <img
        src="your-image-url.jpg"
        alt="Open Video"
        className="cursor-pointer"
        onClick={openVideo}
      />

      {/* Modal for the video */}
      {isVideoOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative w-full max-w-2xl mx-auto bg-white p-4">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white bg-red-500 px-4 py-2 rounded-full"
              onClick={closeVideo}
            >
              X
            </button>

            {/* Video */}
            <video
              className="w-full"
              controls
              autoPlay
            >
              <source src="your-video-url.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageWithVideoPopup;
