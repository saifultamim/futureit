"use client";

import React, { useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

import { useRouter } from "next/navigation";
import { Icons } from "@/components/Icon";

export function SupportForm({ categories, setIsOpen, setIsAction, isAction }) {
  const router = useRouter();

  const [category, setCategory] = useState("");
  const [subject, setSubject] = useState("");
  const [contentUploading, setContentUploading] = useState(false);
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
      const data = await createSupportPost({
        xitemcode: category,
        xmessage: _content,
        xstudent: Number(session.data?.user?.id),
        xfile: "file",
        xsubject: subject,
      });
      setIsAction(true);
      return data;
    } catch (error) {
      console.error("Error submitting form data", error);
    }
  };

  function isValidateForm() {
    if (!category || !subject || !validateContent(quill?.root.innerHTML))
      return false;
    return true;
  }

  const handleSave = async () => {
    setIsAction(false);
    try {
      const isContentValid = isValidateForm();
      if (!isContentValid) {
        showAlert("error", "Please fill all the fields");
        return;
      }

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
              showAlert("success", "Support submitted successfully");
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
            showAlert("success", "Support submitted successfully");
            resetForm();
            return;
          } else {
            showAlert("error", "Failed to submit support");
            return;
          }
        }
      }
    } catch (error) {
      console.error("Error submitting form data", error);
    }
  };

  function resetForm() {
    setSubject("");
    setCategory("");
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
    quill?.clipboard.dangerouslyPasteHTML("");

    router.refresh();
  }

  return (
    <div className="max-w-3xl mx-auto p-4 flex flex-col gap-4">
      <div>
        <select
          className="border border-gray-300 rounded-md p-2 w-full"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Course</option>
          {categories?.map((course) => (
            <option key={course.xitemcode} value={course.xitemcode}>
              {course.xdesc}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <input
          autoComplete="new-password"
          type="text"
          className="border border-gray-300 rounded-md p-2 w-full"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
        />
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-auto relative h-[200px]">
        <div className="w-full h-[200px]">
          <div ref={quillRef} />
        </div>
      </div>

      <div className="p-4 border-t flex items-center justify-between gap-4">
        <button
          disabled={contentUploading}
          type="button"
          onClick={handleSave}
          className="w-full py-3 text-white font-semibold rounded-lg bg-[#EE3373] hover:bg-orange-500 transition-transform transform duration-300 ease-in-out disabled:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {contentUploading ? (
            <span className="flex items-center gap-2">
              <Icons.loader className="animate-spin inline ml-2" /> Submitting
            </span>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </div>
  );
}

SupportForm.displayName = "SupportForm";
