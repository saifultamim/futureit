import { Loading } from "@/components/ui/Loading";
import MainAboutUs from "@/features/web/about/MainAboutUs";
import { Suspense } from "react";

const About = () => {
  return (
    <div className="w-11/12 mx-auto lg:px-6">
      <Suspense fallback={<Loading />}>
        {" "}
        <MainAboutUs />{" "}
      </Suspense>
    </div>
  );
};

export default About;
