"use client";
import { Icons } from "@/components/Icon";
import { useState, useCallback, useTransition } from "react";

const ExamFilter = ({ onSearch }) => {
  const [isPending, startTransition] = useTransition();
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedBatch, setSelectedBatch] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState([]);
  const [batches, setBatches] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const enrolledCourses = [
    { xitemcode: "1001", xdesc: "xdesc1" },
    { xitemcode: "1002", xdesc: "xdesc2" },
  ];

  const handleCourseChange = useCallback(async (courseId) => {
    setSelectedCourse(courseId);
    setSelectedBatch("");

    if (!courseId) {
      setBatches([]);
      setLessons([]);
      return;
    }

    try {
      const batches = [
        { id: 1, xbatchname: "xbatchname1" },
        { id: 2, xbatchname: "xbatchname2" },
      ];
      const lessons = [
        { xlesson: 1, xdesc: "xdesc1" },
        { xlesson: 2, xdesc: "xdesc2" },
      ];
      console.log("+++++++ batch", batches, lessons);
      setBatches(batches);
      setLessons(lessons);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsFetching(false);
    }
  }, []);

  const handleSearch = useCallback(() => {
    if (!selectedCourse || !selectedBatch || !selectedLesson) return;

    startTransition(() => {
      onSearch({
        courseId: selectedCourse,
        batchId: selectedBatch,
        lessonId: selectedLesson,
      });
    });
  }, [selectedCourse, selectedBatch, selectedLesson, onSearch]);

  return (
    <form>
      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        <div className="flex-1 w-full">
          <label className="text-sm text-gray-500 font-semibold mb-1">
            Course
          </label>
          <select
            className="w-full p-2 border rounded-md bg-white"
            onChange={(e) => handleCourseChange(e.target.value)}
          >
            <option value="">-select course-</option>
            {enrolledCourses?.map((course) => (
              <option key={course.xitemcode} value={course.xitemcode}>
                {course?.xdesc}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1 w-full">
          <label className="text-sm text-gray-500 font-semibold mb-1">
            Batch
          </label>
          <div className="relative">
            <select
              className={`w-full p-2 border rounded-md bg-white ${
                isFetching ? "text-gray-400" : ""
              }`}
              value={selectedBatch}
              disabled={!selectedCourse || isFetching}
              onChange={(e) => setSelectedBatch(e.target.value)}
            >
              <option value="">-select-</option>
              {batches.map((batch) => (
                <option key={batch.id} value={batch.id}>
                  {batch.xbatchname}
                </option>
              ))}
            </select>
            {isFetching && (
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <Loader2 className="h-5 w-5 text-gray-400 animate-spin" />
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 w-full">
          <label className="text-sm text-gray-500 font-semibold mb-1">
            Lesson
          </label>
          <div className="relative">
            <select
              className={`w-full p-2 border rounded-md bg-white ${
                isFetching ? "text-gray-400" : ""
              }`}
              value={selectedLesson}
              disabled={!selectedCourse || isFetching}
              onChange={(e) => setSelectedLesson(e.target.value)}
            >
              <option value="">-select-</option>
              {lessons.map((lesson) => (
                <option key={lesson.xlesson} value={lesson.xlesson}>
                  {lesson.xdesc}
                </option>
              ))}
            </select>
            {isFetching && (
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <Icons.loader className="h-5 w-5 text-gray-400 animate-spin" />
              </div>
            )}
          </div>
        </div>
      </div>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
        onClick={handleSearch}
        disabled={
          !selectedCourse || !selectedBatch || !selectedLesson || isPending
        }
      >
        {isPending ? (
          <p className="flex items-center">
            <Icons.loader className="mr-2 h-4 w-4 animate-spin" />
            Searching...
          </p>
        ) : (
          "Search"
        )}
      </button>
    </form>
  );
};

export default ExamFilter;
