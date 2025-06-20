import Hero from "@/features/web/home/Hero";
import Courses from "@/features/web/home/Courses";
import Services from "@/features/web/home/Services";
import Event from "@/features/web/home/Event";
import MileStones from "@/features/web/home/Milestones";
import SuccessStory from "@/features/web/home/SuccessStory";
import Mentors from "@/features/web/home/Mentors";
import Seminer from "@/features/web/home/Seminer";
import Testimonial from "@/features/web/home/Testimonial";
import Collaborates from "@/features/web/home/Collaborates";
import CallToUs from "@/features/web/home/CallToUs";

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
