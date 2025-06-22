import React from "react";
import AboutSection from "@/features/web/about/components/AboutSection";
import DirectorMessage from "@/features/web/about/components/DirectorMessage";
import Highlights from "@/features/web/about/components/Highlights";
import Overview from "@/features/web/about/components/Overview";
const AboutPageContent = () => {
  return (
    <div>
      <DirectorMessage />
      <AboutSection />
      <Overview />
      <Highlights />
    </div>
  );
};

export default AboutPageContent;
