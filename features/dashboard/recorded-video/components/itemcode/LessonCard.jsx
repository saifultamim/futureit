"use client";

import { useEffect, useState } from "react";
import {
  FaClipboardList,
  FaPlayCircle,
  FaClipboardCheck,
  FaQuestionCircle,
  FaClock,
  FaLock,
  FaCheckCircle,
} from "react-icons/fa";

import Breadcrumb from "./Breadcrumb";

const CONTENT_TYPE = {
  VIDEO: "video",
  RESOURCE: "resource",
  QUIZ: "quiz",
};

const LessonCard = ({ videoResources }) => {
  const [selectedLesson, setSelectedLesson] = useState(videoResources[0]);
  const [selectedContentType, setSelectedContentType] = useState(
    CONTENT_TYPE.VIDEO
  );
  const [selectedResourceFile, setSelectedResourceFile] = useState(null);
  const [selectedQuizz, setSelectedQuiz] = useState({
    xsl: null,
    totalQuestions: null,
    totalTime: null,
    passMark: null,
  });
  const [lessonIndex, setLessonIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleContentSelect = (index, contentType, resource = null) => {
    setLessonIndex(index);
    setSelectedLesson(videoResources[index]);
    setSelectedContentType(contentType);
    if (contentType === CONTENT_TYPE.RESOURCE) {
      setSelectedResourceFile(resource);
    }
    if (contentType == CONTENT_TYPE.QUIZ) {
      const quizz = resource;
      setSelectedQuiz({
        ...selectedQuizz,
        xsl: quizz?.xsl,
        totalQuestions: quizz?.quiz_questions?.length,
        totalTime: quizz?.xquiz_time,
        passMark: quizz?.xpass_mark,
      });
    }
  };

  const handleNext = () => {
    setOpenIndex((prevIndex) => (prevIndex + 1) % videoResources.length);
    setLessonIndex((prevIndex) => (lessonIndex + 1) % videoResources.length);
  };

  const handlePrevious = () => {
    setOpenIndex(
      (prevIndex) =>
        (prevIndex - 1 + videoResources.length) % videoResources.length
    );
    setLessonIndex(
      (prevIndex) =>
        (prevIndex - 1 + videoResources.length) % videoResources.length
    );
  };

  useEffect(() => {
    const iframe = document.querySelector("iframe");
    if (iframe) {
      const url = new URL(selectedLesson?.lesson?.xvideolink);
      // url.searchParams.set("autoplay", "1");
      iframe.src = url.toString();
    }
  }, [selectedLesson]);

  useEffect(() => {
    setSelectedLesson(videoResources[lessonIndex]);
  }, [lessonIndex, videoResources]);

  return (
    <>
      {/* Breadcumb */}
      <Breadcrumb videoResources={videoResources} lessonIndex={lessonIndex} />

      {/* Content Area */}
      <div className="flex flex-wrap gap-4">
        {/* Content preview */}
        <div className="flex-1">
          {/* Resource content (Like pdf, doc) */}
          {selectedContentType === CONTENT_TYPE.RESOURCE && (
            <>
              <embed
                src={`https://hafsnitcontent.sgp1.digitaloceanspaces.com/abclit/courses/resources/${selectedResourceFile}`}
                type="application/pdf"
                width="100%"
                height="100%"
                style={{ width: "100%", height: "800px" }}
                className="w-full bg-white rounded-md border shadow-sm overflow-y-auto"
              />
            </>
          )}

          {/* Video content */}
          {selectedContentType === CONTENT_TYPE.VIDEO && (
            <div className="w-full">
              <iframe
                className="w-full h-[450px] rounded-lg"
                src={selectedLesson?.lesson?.xvideolink}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}

          {/* Quiz content */}
          {selectedContentType === CONTENT_TYPE.QUIZ && (
            <div className="flex flex-col items-center border border-blue-300/80 drop-shadow-lg rounded-md relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 px-6 pb-12">
                <div className="flex flex-col items-center gap-3 p-4 bg-gray-50 rounded-lg shadow-sm">
                  <FaQuestionCircle size={28} className="text-blue-500" />
                  <div>
                    <p className="text-base font-semibold">
                      Total Questions: {selectedQuizz?.totalQuestions}
                    </p>

                    <p className="text-sm text-gray-500">
                      Questions will be shuffled
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3 p-4 bg-gray-50 rounded-lg shadow-sm">
                  <FaClock size={28} className="text-green-500" />
                  <div>
                    <p className="text-base font-semibold">
                      Total Time: {selectedQuizz?.totalTime}
                    </p>
                    <p className="text-sm text-gray-500">
                      You have {selectedQuizz?.totalTime} to answer all
                      questions
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3 p-4 bg-gray-50 rounded-lg shadow-sm">
                  <FaCheckCircle size={28} className="text-red-500" />
                  <div>
                    <p className="text-base font-semibold">
                      Pass Mark: {selectedQuizz?.passMark}
                    </p>
                    <p className="text-sm text-gray-500">
                      You need to score at least {selectedQuizz?.passMark} to
                      pass the quiz
                    </p>
                  </div>
                </div>
              </div>

              <button className="absolute -bottom-5 transform traslate-y-5 border border-blue-700 bg-blue-700 py-2 px-4 shadow-lg rounded-lg text-white">
                Start Quiz
              </button>
            </div>
          )}

          <div className="flex justify-between items-center mt-4 text-black">
            <button onClick={handlePrevious} disabled={lessonIndex === 0}>
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={lessonIndex === videoResources.length - 1}
              className={
                lessonIndex === videoResources.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }
            >
              Next
            </button>
          </div>
        </div>

        {/* List of resources */}
        <div className=" bg-white rounded-md border shadow-sm overflow-y-auto max-h-[800px] w-96">
          <div className="border-b text-center p-3 flex justify-between">
            <p className="font-semibold">Course Syllabus</p>
          </div>

          {videoResources?.map((learnContent, index) => (
            <div className="border-b border-gray-200 text-left" key={index}>
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center pt-[15px] pb-[10px] px-[10px] text-left"
              >
                <span className="text-md font-medium">
                  {learnContent?.lesson?.xdesc}
                </span>
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-[15px] pb-[10px] space-y-4 cursor-pointer">
                  {/* Video content */}
                  <div className="flex items-center gap-2">
                    <span>
                      {learnContent.is_free && !learnContent.is_lock ? (
                        <FaPlayCircle className="text-blue-700" />
                      ) : (
                        <FaLock className="opacity-50" />
                      )}
                    </span>
                    <div
                      className={`flex-1 ${
                        learnContent.is_free && !learnContent.is_lock
                          ? "cursor-pointer"
                          : "cursor-not-allowed opacity-50"
                      }`}
                      onClick={() =>
                        handleContentSelect(index, CONTENT_TYPE.VIDEO)
                      }
                    >
                      <p className="text-sm font-medium relative top-0.5">
                        Video: {learnContent?.lesson?.xdesc}
                      </p>
                    </div>
                  </div>

                  {/* Resources content */}
                  {learnContent?.lesson?.resources?.map((resource) => (
                    <div
                      key={resource.xsl}
                      className="flex items-center gap-2"
                      onClick={() =>
                        handleContentSelect(
                          index,
                          CONTENT_TYPE.RESOURCE,
                          resource.xfile
                        )
                      }
                    >
                      <span className="text-gray-700">
                        {learnContent.is_free && !learnContent.is_lock ? (
                          <FaClipboardList className="text-blue-700" />
                        ) : (
                          <FaLock className="opacity-50" />
                        )}
                      </span>
                      <div className="flex-1 overflow-hidden">
                        <p
                          className={`text-sm truncate relative top-0.5 ${
                            learnContent.is_free
                              ? "cursor-pointer"
                              : "cursor-not-allowed opacity-50"
                          }`}
                        >
                          {resource?.xtitle}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Quiz*/}
                  {learnContent?.lesson?.quizzes?.length > 0 && (
                    <div
                      className="flex items-center gap-2"
                      onClick={() =>
                        handleContentSelect(
                          index,
                          CONTENT_TYPE.QUIZ,
                          learnContent?.lesson?.quizzes?.[0]
                        )
                      }
                    >
                      <span>
                        {learnContent.is_free && !learnContent.is_lock ? (
                          <FaClipboardCheck className="text-blue-700" />
                        ) : (
                          <FaLock className="opacity-50" />
                        )}
                      </span>
                      <div className="flex-1">
                        <p
                          className={`text-sm truncate relative top-0.5 ${
                            learnContent.is_free && !learnContent.is_lock
                              ? "cursor-pointer"
                              : "cursor-not-allowed opacity-50"
                          }`}
                        >
                          Quiz-{index + 1}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LessonCard;
