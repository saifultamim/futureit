import AboutPageContent from "@/features/web/about/components/AboutPageContent";
import {
  About,
  Career,
  Facilities,
  MissionVission,
} from "@/features/web/about/components/Others";
import { getPageTitle } from "@/utils/MetaData";

export const generateMetadata = () => ({
  title: getPageTitle("about"),
});

const AboutPage = ({ searchParams }) => {
  return (
    <div className="container w-11/12 mx-auto lg:px-6">
      {!searchParams?.content && <AboutPageContent />}

      {searchParams?.content === "about" && <About />}

      {searchParams?.content === "mission-and-vision" && <MissionVission />}

      {searchParams?.content === "facilities" && <Facilities />}

      {searchParams?.content === "career-plan" && <Career />}
    </div>
  );
};

export default AboutPage;
