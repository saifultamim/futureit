"use client";

import { SUPPORT_POST_STUDENT } from "@/utils/data/constant";
import Image from "next/image";
import { useEffect, useState } from "react";

export const ProfileImagePost = ({ question }) => {
  const [imgSrc, setImgSrc] = useState(
    `${process.env.NEXT_PUBLIC_FILE_PATH_PROFILE}/avatar.jpg`
  ); // Set a default fallback

  // Construct the image path based on the question's xstudent
  const jpgPath = `${process.env.NEXT_PUBLIC_FILE_PATH_PROFILE}/${SUPPORT_POST_STUDENT}-${question?.xstudent}.jpg`;

  useEffect(() => {
    const tryLoadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new window.Image(); // Use window.Image
        img.src = src;
        img.onload = () => resolve(src);
        img.onerror = () => reject(new Error(`Failed to load: ${src}`));
      });
    };

    const loadImages = async () => {
      if (jpgPath) {
        try {
          const loadedSrc = await tryLoadImage(jpgPath);
          setImgSrc(loadedSrc); // Set the image source if it loads
        } catch (error) {
          // console.error(error);
          setImgSrc(`/images/avatar.jpg`); // Fallback image
        }
      }
    };

    loadImages();
  }, [jpgPath]);

  return (
    <Image
      height={75}
      width={75}
      src={imgSrc} // Ensure imgSrc is a valid string
      alt={`${question?.xstudent} image`} // Use dynamic alt text based on role
      className="object-cover w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-white rounded-full"
      priority // Add the priority property
    />
  );
};

ProfileImagePost.displayName = "ProfileImagePost";
