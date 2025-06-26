import React from "react";
import SuccessStory from "@/features/web/SuccessStory/components/SuccessStory";
import { getPageTitle } from "@/utils/MetaData";

export const generateMetadata = () => ({
  title: getPageTitle("successStory"),
});

const successStoryPage = () => {
  return (
    <div>
      <SuccessStory />
    </div>
  );
};

export default successStoryPage;
