import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
const SpecificCourse = () => {
  const courseLessons = [
    {
      xlesson: "Orientation with Soft Skill (FS)",
      xdesc: "Introduction to soft skills and their importance in freelancing.",
    },
    {
      xlesson: "Tools Management (FS)",
      xdesc: "Overview and management of essential digital tools.",
    },
    {
      xlesson: "MS Word & Google Docs for Professional Document Creation (FS)",
      xdesc: "Document creation and formatting best practices.",
    },
    {
      xlesson: "MS Excel & Google Sheet for Data Management (FS)",
      xdesc: "Using spreadsheets for organizing and analyzing data.",
    },
    {
      xlesson: "MS PowerPoint for Effective Presentations (FS)",
      xdesc: "Creating impactful presentations using PowerPoint.",
    },
    {
      xlesson: "Canva Design Part 01 (FS)",
      xdesc: "Basics of designing visuals with Canva.",
    },
    {
      xlesson: "Canva Design Part 02 (FS)",
      xdesc: "Advanced Canva techniques and design tips.",
    },
    {
      xlesson: "Google Family (FS)",
      xdesc: "Understanding and using Google’s productivity tools.",
    },
    {
      xlesson: "Video Editing by Mobile (FS)",
      xdesc: "Editing videos efficiently using mobile apps.",
    },
    {
      xlesson: "Video Editing by Computer (FS)",
      xdesc: "Professional video editing on desktop platforms.",
    },
    {
      xlesson: "Portfolio Website Making (FS)",
      xdesc: "Building a personal website to showcase work.",
    },
    {
      xlesson: "Communication Skill (FS)",
      xdesc: "Developing effective verbal and written communication.",
    },
    {
      xlesson: "Introduction Overview (Fundamental Session) (MDM)",
      xdesc: "Course introduction and digital marketing fundamentals.",
    },
    {
      xlesson: "Social Media Account Create (FB Page) (MDM)",
      xdesc: "Creating and setting up a Facebook Page for business.",
    },
    {
      xlesson: "LinkedIn Marketing (MDM)",
      xdesc: "Using LinkedIn for personal branding and marketing.",
    },
    {
      xlesson: "Lead Generation (MDM)",
      xdesc: "Techniques for identifying and capturing leads online.",
    },
    {
      xlesson: "Email Marketing (MDM)",
      xdesc: "Crafting and executing email campaigns.",
    },
    {
      xlesson: "Shopify Overview & Store Development (MDM)",
      xdesc: "Getting started with Shopify and building your store.",
    },
    {
      xlesson: "Shopify Store Management (MDM)",
      xdesc: "Running and maintaining a Shopify store.",
    },
    {
      xlesson: "Meta Organic Marketing (MDM)",
      xdesc: "Promoting content organically on Meta platforms.",
    },
    {
      xlesson: "Meta Business Manager Setup (MDM)",
      xdesc: "Setting up Meta’s Business Manager for advertising.",
    },
    {
      xlesson: "Facebook Ads Campaign (MDM)",
      xdesc: "Creating and managing Facebook ad campaigns.",
    },
    {
      xlesson: "Facebook Ads Campaign for Drop Shipping Products (MDM)",
      xdesc: "Running ads specifically for dropshipping products.",
    },
    {
      xlesson: "Facebook Audience Retargeting and Pixel with API Setup (MDM)",
      xdesc: "Advanced Facebook Ads: Retargeting and pixel setup.",
    },
    {
      xlesson: "Instagram Marketing (MDM)",
      xdesc: "Leveraging Instagram for marketing and brand visibility.",
    },
    {
      xlesson: "YouTube Account Create & Setup (MDM)",
      xdesc: "Setting up a professional YouTube channel.",
    },
    {
      xlesson: "YouTube SEO and Monetization (MDM)",
      xdesc: "Optimizing videos for search and generating income.",
    },
    {
      xlesson: "Fiverr Overview & Gig Research (MDM)",
      xdesc: "Understanding Fiverr and researching high-demand gigs.",
    },
    {
      xlesson: "Fiverr Account Create & Gig Setup (MDM)",
      xdesc: "Creating a Fiverr account and setting up gigs.",
    },
    {
      xlesson: "Fiverr Tips & Tricks (MDM)",
      xdesc: "Best practices to succeed on Fiverr.",
    },
    {
      xlesson: "Keyword Research and SEO (MDM)",
      xdesc: "Finding keywords for SEO success.",
    },
    {
      xlesson: "On-Page SEO (MDM)",
      xdesc: "Optimizing on-site elements for better search rankings.",
    },
    {
      xlesson: "Off-Page SEO (MDM)",
      xdesc: "Building backlinks and increasing domain authority.",
    },
    {
      xlesson: "Technical SEO (MDM)",
      xdesc: "Improving website infrastructure for SEO performance.",
    },
    {
      xlesson: "Google Ads Campaign (MDM)",
      xdesc: "Creating and running ads with Google Ads.",
    },
    {
      xlesson: "Others Marketplace (MDM)",
      xdesc: "Exploring alternative freelance marketplaces.",
    },
    {
      xlesson: "Local Client Hunting (MDM)",
      xdesc: "Finding and working with local clients.",
    },
    {
      xlesson: "Review and Exam (MDM)",
      xdesc: "Final review and assessment of learning outcomes.",
    },
  ];
  const course = {
    xvideo_link:
      "https://www.youtube.com/embed/gScdRiOngAQ?si=CfYu-KYq1k_4RK2L",
  };
  return (
    <div>
      <section className=" bg-white py-6">
        <div className="containe w-11/12 lg:px-6 mx-auto">
          <div className="flex flex-wrap md:flex-nowrap space-y-5 md:space-y-0 md:space-x-5 py-6">
            {/* Main Content */}
            <div className="w-full md:w-2/3">
              <h1 className="font-semibold text-2xl md:text-4xl lg:text-5xl leading-[120%] text-[#101828] mb-2 font-siliguri">
                {/* {course?.xdesc} */}Mastering Digital Marketing (Offline)
                Course
              </h1>
              <div
                className="font-normal text-sm md:text-base text-[#1d2939] font-siliguri leading-[164.3%]"
                dangerouslySetInnerHTML={{
                  __html: "Mastering Digital Marketing (Offline) Course",
                }}
                //   course?.xlongdesc
              ></div>

              {/* Study Plan */}
              <div className="w-full mt-10 mb-8">
                <h3 className="font-siliguri text-xl md:text-2xl font-semibold text-[#1F1E1E]">
                  স্টাডি প্ল্যান
                </h3>
                <div className="border-b border-gray-200 py-[6px] mb-6"></div>
                <ul>
                  {courseLessons?.map((content) => (
                    <li
                      className="flex items-center mb-4 cursor-pointer font-roboto text-gray-800 text-sm md:text-base"
                      key={content.xlesson}
                    >
                      <FaRegDotCircle className="inline-block text-xs md:text-sm mr-2" />

                      <span
                        className="text-xs md:text-sm text-gray-600"
                        dangerouslySetInnerHTML={{
                          __html: content.xdesc,
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Projects */}
              <div className="w-full mt-10 mb-8">
                <h3 className="font-siliguri text-xl md:text-2xl font-semibold text-[#1F1E1E]">
                  প্রজেক্টস
                </h3>
                <div className="border-b border-gray-200 py-[6px] mb-6"></div>
                {/* {Object.keys(parsedCourseProject).map(
                    (sectionTitle, sectionIndex) => (
                      <Collapse key={sectionIndex} title={sectionTitle}>
                        {parsedCourseProject[sectionTitle].details.map(
                          (detail, detailIndex) => (
                            <p key={detailIndex}>{detail}</p>
                          )
                        )}
                      </Collapse>
                    )
                  )} */}
              </div>

              {/* Instructor Section */}
              <div className="w-full mb-20">
                <h3 className="font-siliguri text-xl md:text-2xl font-semibold text-[#1F1E1E]">
                  ইন্সট্রাক্টর
                </h3>
                <div className="border-b border-gray-200 py-[8px] mb-6"></div>
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {courseTeachers?.map((teacher, index) => (
                      <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg overflow-hidden p-3"
                      >
                        <Image
                          className="h-24 w-24 mx-auto rounded-full mb-4"
                          src={`/images/teachers/${
                            teacher?.ximage || "no.jpg"
                          }`}
                          alt="Instructor"
                        />
                        <div className="relative text-center">
                          <h2 className="text-sm md:text-md font-siliguri font-semibold text-[#1F1E1E] mb-1">
                            {teacher?.xteachername}
                          </h2>
                          <p
                            className="text-xs md:text-sm text-gray-600"
                            dangerouslySetInnerHTML={{
                              __html: teacher?.xeducation,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div> */}
              </div>
            </div>

            {/* Video and Enrollment Section */}
            <div className="w-full md:flex-1">
              <div className="bg-white overflow-hidden relative pt-[56.25%] mb-4">
                <iframe
                  src={course?.xvideo_link || ""}
                  className="w-full absolute top-0 left-0 bottom-0 right-0 h-full border-none rounded-lg bg-gray-100"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex flex-col space-y-2 w-full font-siliguri">
                <p className="text-xl md:text-2xl font-semibold">
                  ৳  27500
                  {/* {course?.xmrp} */}
                </p>
                <button className="font-siliguri text-white w-full leading-normal py-3 bg-secondary rounded-lg font-bold text-lg">
                  ব্যাচে ভর্তি হোন
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecificCourse;
