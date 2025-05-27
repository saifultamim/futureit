import React from "react";
import AboutSection from "@/features/web/about/AboutSection";
import DirectorMessage from "@/features/web/about/DirectorMessage";
import Highlights from "@/features/web/about/Highlights";
import Overview from "@/features/web/about/Overview";
const AboutUs = () => {
  return (
    <div>
      <DirectorMessage />
      <AboutSection />
      <Overview />
      <Highlights />
    </div>
  );
};

export default AboutUs;
