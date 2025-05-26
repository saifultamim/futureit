import Image from "next/image";
import { React } from "react";
import heroImage from "@/public/images/hero.png";
import CourseCart from "@/components/ui/course/Cart";
import { courses } from "@/utils/data/home/courses";
import { mentors } from "@/utils/data/home/mentors";
import { milestones } from "@/utils/data/home/milestones";
import { displayedSuccessStories } from "@/utils/data/home/successStory";
import { servicesIcon } from "@/utils/data/home/services";
import Video from "@/components/ui/Video";
import SuccessStoryCard from "@/components/ui/SuccessStoryCard";
import MentorsModal from "@/components/modal/Mentors";

export {
  Image,
  React,
  heroImage,
  CourseCart,
  courses,
  Video,
  servicesIcon,
  milestones,
  SuccessStoryCard,
  displayedSuccessStories,
  mentors,
  MentorsModal,
};
