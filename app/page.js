import Courses from "@/features/web/home/components/Courses";
import Hero from "@/features/web/home/components/Hero";
import MileStones from "@/features/web/home/components/Milestones";
import Services from "@/features/web/home/components/Services";
import SuccessStory from "@/features/web/home/components/SuccessStory";
import Event from "@/features/web/home/components/Event";
import Mentors from "@/features/web/home/components/Mentors";
import Seminer from "@/features/web/home/components/Seminer";
import Testimonial from "@/features/web/home/components/Testimonial";
import Collaborates from "@/features/web/home/components/Collaborates";
import CallToUs from "@/features/web/home/components/CallToUs";
import { getPageTitle } from "@/utils/MetaData";

export const generateMetadata = () => ({
  title: getPageTitle("home"),
});

export default function Home() {
  return (
    <div>
      <Hero />
      <Courses />
      <Services />
      <MileStones />
      <SuccessStory />
      <Event />
      <Mentors />
      <Seminer />
      <Testimonial />
      <Collaborates />
      <CallToUs />
    </div>
  );
}
