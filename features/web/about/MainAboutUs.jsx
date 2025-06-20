"use client";
import { useSearchParams } from "next/navigation";
import AboutUs from "./AboutUs";
import { About, Career, Facilities, MissionVission } from "./Others";

const MainAboutUs = () => {
  const searchParams = useSearchParams();
  const content = searchParams.get("content");
  return (
    <div>
      {/* Default About Page */}
      {!content && <AboutUs />}

      {content === "about" && <About />}

      {content === "mission-and-vision" && <MissionVission />}

      {content === "facilities" && <Facilities />}

      {content === "career-plan" && <Career />}
    </div>
  );
};

export default MainAboutUs;
