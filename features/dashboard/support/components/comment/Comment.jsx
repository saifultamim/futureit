"use client";

import React, { useState } from "react";

// import { ProfileImage } from "./profileImage";

// import { CommentForm } from "./commentForm";

import { POST_STATUS } from "@/utils/data/constant";
import { Icons } from "@/components/Icon";
import { timeFormat } from "@/utils/dateTimeUtils";
import { CommentForm } from "./CommentForm";
import { ProfileImage } from "./ProfileImage";

export const Comment = ({
  post,
  showCommentsLoading,
  setIsAction,
  isAction,
}) => {
  const [expandedQuestions, setExpandedQuestions] = useState({});
  const toggleShowMore = (postId) => {
    setExpandedQuestions((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  const commentFormRender = (status) => {
    if (status == POST_STATUS.SOLVED || status == POST_STATUS.PENDING) {
      return null;
    }
    return (
      <CommentForm post={post} setIsAction={setIsAction} isAction={isAction} />
    );
  };

  return (
    <>
      <div className="relative flex flex-col gap-4 max-sm:ml-4 ml-10 duration-300 ease-in-out transform">
        {showCommentsLoading
          ? Array.from({
              length: post?.support_post_comment?.length || 0,
            }).map((_, index) => <SkeletonCommentCard key={index} />)
          : post?.support_post_comment?.map((comment, _index) => (
              <div
                key={comment?.xsl}
                className="bg-white first:mt-6 mr-3 relative border-2 border-gray-300 rounded-xl mb-4 shadow-[0_2px_10px_3px_rgba(0,0,0,0.1)] transition-transform duration-300 transform hover:scale-105"
              >
                {comment?.xstatus == POST_STATUS.SOLVED && (
                  <div className="absolute top-3 flex flex-col items-center justify-center  rounded-full p-1 right-4 bg-[#38b34a]">
                    <Icons.check className="text-white" />
                  </div>
                )}
                <div className="flex px-4 mt-2">
                  <div className="absolute top-[-20px] left-[6%]">
                    <div className="w-[75px] h-[75px] rounded-full bg-white shadow">
                      <ProfileImage
                        comment={(comment?.xreply_id, comment?.xreply_by)}
                        // comment={comment}
                      />
                    </div>
                  </div>
                  <div className="ml-[23%] max-sm:ml-[32%]">
                    <h4 className="text-lg max-sm:text-[12px] font-bold text-[#050506]">
                      {comment?.xreply_name}
                    </h4>
                    <p className="text-sm max-sm:text-[9px] text-gray-900">
                      {comment?.xreply_designation}, Mentors IT
                    </p>
                  </div>
                </div>

                <div className="px-4 py-5">
                  {comment?.xcomment?.length > 300 ? (
                    <div>
                      <div
                        id="quilljs-editor"
                        dangerouslySetInnerHTML={{
                          __html: expandedQuestions[comment?.xsl || ""]
                            ? comment?.xcomment
                            : comment?.xcomment?.slice(0, 300) + "...",
                        }}
                      />
                      <button
                        onClick={() => toggleShowMore(String(comment?.xsl))}
                        className="text-blue-500 text-[12px] md:text-[14px] hover:underline"
                      >
                        {expandedQuestions[comment?.xsl || ""]
                          ? "Show Less"
                          : "Show More"}
                      </button>
                    </div>
                  ) : (
                    <div
                      id="quilljs-editor"
                      dangerouslySetInnerHTML={{ __html: comment?.xcomment }}
                    />
                  )}
                </div>
                <div className="text-sm max-sm:text-[10px] py-2 px-6 bg-red-400 text-white flex justify-end items-center rounded-xl">
                  {timeFormat(comment?.ztime)}
                </div>
              </div>
            ))}
        {commentFormRender(post?.xstatus)}
      </div>
    </>
  );
};

const SkeletonCommentCard = () => {
  return (
    <div className="bg-white first:mt-6 mr-3 relative border-2 border-gray-300 rounded-xl mb-4 shadow-[0_2px_10px_3px_rgba(0,0,0,0.1)] transition-transform duration-300 transform hover:scale-105 animate-pulse">
      {/* Status Badge (Skeleton) */}
      <div className="absolute top-3 right-4 flex flex-col items-center justify-center rounded-full p-1 bg-slate-200">
        <div className="w-6 h-6 bg-slate-300 rounded-full"></div>
      </div>

      {/* User Info Section */}
      <div className="flex px-4 mt-2">
        <div className="absolute top-[-20px] left-[6%]">
          <div className="w-[75px] h-[75px] rounded-full bg-slate-200"></div>
        </div>
        <div className="ml-[23%] max-sm:ml-[32%]">
          <div className="w-32 h-5 bg-slate-200 mb-2"></div>
          <div className="w-28 h-4 bg-slate-200 mb-2"></div>
        </div>
      </div>

      {/* Comment Content Section */}
      <div className="px-4 py-5">
        <div className="w-full h-5 bg-slate-200 mb-4"></div>
        <div className="w-20 h-5 bg-slate-200"></div>
      </div>

      {/* Time Section */}
      <div className="text-sm max-sm:text-[10px] py-2 px-6 bg-slate-200 text-slate-400 flex justify-end items-center rounded-xl">
        <div className="w-24 h-4 bg-slate-200"></div>
      </div>
    </div>
  );
};

Comment.displayName = "Comment";
