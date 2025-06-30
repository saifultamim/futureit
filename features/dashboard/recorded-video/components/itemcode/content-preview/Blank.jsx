import { useState } from "react";

const BlankContent = ({ selectedVideoId, onClassAttended }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (value) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "/api/stuportal/v1/recorded-video/update-attend-class",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ value, selectedVideoId }),
        }
      );
      const updatedRecordVideo = await response.json();
      onClassAttended(updatedRecordVideo?.data);
    } catch (error) {
      console.error("Error submitting response:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitting) {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <p className="text-center text-[18px] font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-8 h-52">
      <p className="text-center text-[18px] font-semibold">
        Are you attend live class of this lesson ?
      </p>
      <div className="flex space-x-4 mt-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => handleSubmit("yes")}
        >
          Yes
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => handleSubmit("no")}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default BlankContent;
