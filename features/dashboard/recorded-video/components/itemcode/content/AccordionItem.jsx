import React from "react";
import ContentItem from "./Item";
import {
  FaPlayCircle,
  FaClipboardList,
  FaClipboardCheck,
} from "react-icons/fa";

import { CONTENT_TYPE, QUIZ_TYPE } from "@/constant";
import { isContentLocked } from "@/utils/isContentLocked";

const renderContent = (
  content,
  index,
  selectedContenttype,
  handleContentSelect
) => {
  const { xwatch_time, lesson } = content;
  const { xdesc, resources, quizzes } = lesson;

  const handleSelect = (type, payload) =>
    handleContentSelect(index, type, payload);

  return (
    <div className="px-[15px] pb-[10px] space-y-4 cursor-pointer">
      {content?.lesson?.quizzes?.[0]?.xquiz_type != QUIZ_TYPE.FINAL && (
        <ContentItem
          key={`video-${index}`}
          lockStatus={isContentLocked(content, index, CONTENT_TYPE.VIDEO)}
          icon={FaPlayCircle}
          text={xdesc}
          onClick={() => handleSelect(CONTENT_TYPE.VIDEO)}
          isActive={selectedContenttype === CONTENT_TYPE.VIDEO}
        />
      )}

      {resources?.map((resource, resourceIndex) => (
        <ContentItem
          key={`resource-${index}-${resourceIndex}`}
          lockStatus={isContentLocked(content, index, CONTENT_TYPE.RESOURCE)}
          watchTime={xwatch_time}
          icon={FaClipboardList}
          text={resource.xtitle}
          onClick={() => handleSelect(CONTENT_TYPE.RESOURCE, resource.xfile)}
          isActive={selectedContenttype === CONTENT_TYPE.RESOURCE}
        />
      ))}

      {quizzes?.length > 0 &&
        (quizzes[0]?.xquiz_type === QUIZ_TYPE.REGULAR ? (
          <ContentItem
            key={`quiz-${index}`}
            lockStatus={isContentLocked(content, index, CONTENT_TYPE.QUIZ)}
            icon={FaClipboardCheck}
            text={`Quiz-1`}
            onClick={() => handleSelect(CONTENT_TYPE.QUIZ, quizzes?.[0])}
            isActive={selectedContenttype === CONTENT_TYPE.QUIZ}
          />
        ) : (
          quizzes.map((quiz, quizIndex) => (
            <ContentItem
              key={`quiz-${index}-${quizIndex}`}
              lockStatus={isContentLocked(content, index, CONTENT_TYPE.QUIZ)}
              icon={FaClipboardCheck}
              text={`Quiz-${quiz.xtopics}`}
              onClick={() => handleSelect(CONTENT_TYPE.QUIZ, quiz)}
              isActive={selectedContenttype === CONTENT_TYPE.QUIZ}
            />
          ))
        ))}
    </div>
  );
};

const AccordionItem = ({
  item,
  index,
  openIndex,
  toggleAccordion,
  selectedContenttype,
  handleContentSelect,
}) => {
  const isOpen = openIndex === index;
  const handleClick = () => {
    if (isOpen) {
      toggleAccordion(null);
    } else {
      toggleAccordion(index);
    }
  };

  return (
    <div className="border-b border-gray-200 text-left" key={index}>
      <button
        onClick={handleClick}
        className="w-full flex justify-between items-center pt-[15px] pb-[10px] px-[10px] text-left overflow-hidden"
      >
        <span className="text-md font-medium truncate">
          {item?.lesson?.xdesc}
        </span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div>
          {renderContent(item, index, selectedContenttype, handleContentSelect)}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
