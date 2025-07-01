"use client";

import { Icons } from "@/components/Icon";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useQuill } from "react-quilljs";

export const CommentForm = ({ post, setIsAction, isAction }) => {
  const router = useRouter();
  const [isSubmit, setIsSubmit] = useState < boolean > false;
  const [contentUploading, setContentUploading] = useState < boolean > false;
  const { quill, quillRef } = useQuill({
    theme: "snow",
    modules: {
      toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
      ],
    },
  });

  const formDataSubmit = async (_content) => {
    try {
      const res = await createComment({
        xcomment: _content,
        xpost_sl: post?.xsl,
        xreply_id: session?.data?.user?.id,
        xreply_by: "Student",
        xreply_name: session?.data?.user?.name,
        xreply_designation: "Student",
      });
      setIsAction(true);
      return res;
    } catch (error) {
      console.error("Error creating comment", error.message);
      return null;
    }
  };

  const resetForm = () => {
    setIsSubmit(true);
    router.refresh();
  };

  const handleSave = async () => {
    if (!validateContent(quill?.root.innerHTML)) {
      showAlert("error", "Write something to submit");
      return;
    }
    setIsAction(false);
    if (quill?.root.innerHTML) {
      // main content
      const htmlContent = quill.root.innerHTML;

      // extract images from content
      const extractedImages = extractImagesFromContent(htmlContent);

      if (extractedImages.length > 0) {
        try {
          setContentUploading(true);
          // upload images
          const uploadImg = await handleUploadImages(extractedImages);

          // merge uploaded images with content
          const upCon = mergeUploadedImages(uploadImg, htmlContent);

          // submit form data
          const res = await formDataSubmit(upCon);

          setContentUploading(false);

          if (res?.result) {
            showAlert("success", "Comment Added successfully");
            resetForm();
            return;
          } else {
            showAlert("error", "Failed to submit support");
            return;
          }
        } catch (error) {
          console.error("Image upload failed", error);
          setContentUploading(false);
        }
      } else {
        const htmlContent = quill?.root.innerHTML;
        setContentUploading(true);
        const res = await formDataSubmit(htmlContent);
        setContentUploading(false);

        if (res?.result) {
          showAlert("success", "Comment Added successfully");
          resetForm();
          return;
        } else {
          showAlert("error", "Failed to submit support");
          return;
        }
      }
    }
  };

  useEffect(() => {
    if (isSubmit) {
      quill?.clipboard.dangerouslyPasteHTML("");
      setTimeout(() => {
        setIsSubmit(false);
      }, 400);
    }
  }, [isSubmit, quillRef]);

  return (
    <div className="my-4 mr-3">
      <div className="bg-white rounded-lg shadow-lg overflow-auto relative min-h-[200px] max-h-[400px]1">
        <div className="w-full min-h-[200px] max-h-[300px]">
          <div ref={quillRef} />
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          disabled={contentUploading}
          type="button"
          onClick={handleSave}
          className="bg-green-600 text-white text-sm px-3 py-1 rounded-md hover:bg-green-700 transition-colors duration-200"
        >
          {contentUploading ? (
            <span className="flex items-center gap-2">
              <Icons.loader className="animate-spin" /> Submitting
            </span>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </div>
  );
};

CommentForm.displayName = "CommentForm";
