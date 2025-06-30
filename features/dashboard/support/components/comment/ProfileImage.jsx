"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export  const ProfileImage = ({ comment }) => {
  const [imgSrc, setImgSrc] = useState(
    `${process.env.NEXT_PUBLIC_FILE_PATH_PROFILE}/avatar.jpg`
  ); // Default to fallback image

  // Construct the image path based on the comment xreply_id and xreply_by
  const xreplyId = comment?.xreply_id || ""; // Handle potential null/undefined
  const xreply_by = comment?.xreply_by || ""; // Handle potential null/undefined
  let jpgPath = null;

  // Determine the correct image path based on user role 
  if (xreplyId) {
    if (xreply_by === "Teacher") {
      jpgPath = `${process.env.NEXT_PUBLIC_FILE_PATH_PROFILE}/${SUPPORT_POST_TEACHER}-${xreplyId}.jpg`;
    } else if (xreply_by === "Student") {
      jpgPath = `${process.env.NEXT_PUBLIC_FILE_PATH_PROFILE}/${SUPPORT_POST_STUDENT}-${xreplyId}.jpg`;
    } else if (xreply_by === "Admin") {
      jpgPath = `${process.env.NEXT_PUBLIC_FILE_PATH_PROFILE}/${SUPPORT_POST_ADMIN}-${xreplyId}.jpg`;
    }
  }

  useEffect(() => {
    const tryLoadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new window.Image(); // Use window.Image
        img.src = src;
        img.onload = () => resolve(src);
        img.onerror = () => reject(new Error(`Failed to load: ${src}`)); // Return an error
      });
    };

    const loadImages = async () => {
      if (jpgPath) {
        try {
          const loadedSrc = await tryLoadImage(jpgPath);
          setImgSrc(loadedSrc); // Set the image source if it loads
        } catch (error) {
          // console.error(error); // Log error for debugging
          setImgSrc(`${process.env.NEXT_PUBLIC_FILE_PATH_PROFILE}/avatar.jpg`); // Fallback image
        }
      } else {
        setImgSrc(`${process.env.NEXT_PUBLIC_FILE_PATH_PROFILE}/avatar.jpg`); // Default fallback
      }
    };

    loadImages();
  }, [jpgPath]); // Run effect when jpgPath changes

  return (
    <Image
      height={75}
      width={75}
      src={imgSrc || `${process.env.NEXT_PUBLIC_FILE_PATH_PROFILE}/avatar.jpg`} // Fallback to default if imgSrc is invalid
      alt={`${xreply_by} image`} // Use dynamic alt text based on role
      className="object-cover h-[75px] w-[75px] rounded-full"
    />
  );
};

 ProfileImage.displayName = "ProfileImage";
