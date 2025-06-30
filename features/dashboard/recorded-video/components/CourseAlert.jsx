import { FiLock, FiCheckCircle } from "react-icons/fi";
const CourseAlert = () => (
  <div className="relative bg-gradient-to-r border border-[#EE2C73]/40 text-[#EE2C73] rounded-lg shadow-lg h-auto p-3">
    {/* Main Content */}
    <h2 className="font-bold text-sm lg:text-2xl mb-4 text-[#EE2C73] border-b border-[#09BCCF] pb-2">
      Important Course Information:
    </h2>

    {/* Course Info List */}
    <ul className="list-none space-y-4 text-sm lg:text-xl text-left">
      <li className="flex items-center gap-3">
        <div className="shrink-0">
          <FiLock className="text-red-400 w-4 h-4 lg:w-8 lg:h-8" />
        </div>
        <span className="text-gray-800">
          To unlock the next lesson or quiz, you must watch at least{" "}
          <strong>60% of the video</strong>.
        </span>
      </li>
      <li className="flex items-center gap-3">
        <div className="shrink-0">
          <FiLock className="text-red-600 w-4 h-4 lg:w-8 lg:h-8" />
        </div>
        <span className="text-gray-800">
          If you did not attend this lesson’s live class, the content will
          remain <strong>locked</strong>.
        </span>
      </li>
      <li className="flex items-center gap-3">
        <div className="shrink-0">
          <FiLock className="text-red-600 w-4 h-4 lg:w-8 lg:h-8" />
        </div>
        <span className="text-gray-800">
          The lesson content will remain <strong>locked</strong> if the live
          class for this lesson has not been completed.
        </span>
      </li>
      <li className="flex items-center gap-3">
        <div className="shrink-0">
          <FiCheckCircle className="text-green-600 w-4 h-4 lg:w-8 lg:h-8" />
        </div>
        <span className="text-gray-800">
          To unlock the next lesson, you must fully complete the previous
          lesson.
        </span>
      </li>
      <li className="flex items-center gap-3">
        <div className="shrink-0">
          <FiCheckCircle className="text-green-600 w-4 h-4 lg:w-8 lg:h-8" />
        </div>
        <span className="text-gray-800">
          After completing the video, you must click the{" "}
          <strong>next button</strong> to track the video progress and go to the
          next content/lesson.
        </span>
      </li>
    </ul>

    {/* Bottom Highlight Box */}
    <div className="mt-4 text-sm lg:text-xl bg-green-50 border-l-4 border-[#09BCCF] text-[#09bbcff4] p-4 rounded">
      <strong>Note:</strong> Please reach out to your instructor if you have any
      questions regarding the course requirements.
    </div>
  </div>
);

export default CourseAlert;