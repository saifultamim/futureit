"use client";
import Image from "next/image";
import { useState } from "react";
import VideoModal from "@/components/modal/Video";
import playIcon from "@/public/images/playicon.png";

const SuccessStoryCard = ({ successStory }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const handleVideoOpen = (src) => {
    setVideoSrc(src);
    setIsModalOpen(true);
  };

  const handleVideoClose = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="relative">
        <div className="w-full">
          <Image
            src={successStory.img}
            alt="story"
            width="500"
            height="500"
            className="h-full w-full rounded-lg"
          />
        </div>

        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          onClick={() => handleVideoOpen(successStory?.src)}
        >
          <Image src={playIcon} alt="playicon" className="w-12 md:w-auto" />
        </div>
      </div>
      <VideoModal
        isOpen={isModalOpen}
        onClose={handleVideoClose}
        videoSrc={successStory?.src}
      />
    </>
  );
};

export default SuccessStoryCard;
