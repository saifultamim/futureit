import React from "react";
import { SuccessStoryCard } from "./home";
import { successStories } from "@/utils/data/successStory";

const SuccessStory = () => {
  return (
    <div className="bg-primary py-10 font-siliguri w-11/12 lg:px-6 mx-auto">
      <div className="container px-3">
        <div className="mb-12">
          <h2 className="text-4xl font-semibold text-[#050400] mb-5">
            {successStories?.title}
          </h2>
          <p className="leading-7 font-medium text-[#605f62]">
            {successStories?.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {successStories?.video?.map((successStory, idx) => (
            <SuccessStoryCard key={idx} successStory={successStory} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
