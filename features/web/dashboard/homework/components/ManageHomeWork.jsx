"use client";

import React, { useState } from "react";



import { EmptyList } from "@/components/ui/EmptyList";

import HomeworkModal from "./HomeWorkModal";
import HomeworkFilter from "./HomeWorkFilter";
import HomeworkTable from "./HomeWorkTable";

const ManageHomeWork = ({ studentEnrollCourses, studentId }) => {
  const [homeworkState, setHomeworkState] = useState({
    items:[],
    isLoading: false,
    hasSearched: false,
    error: null,
  });
  const [modalState, setModalState] = useState({
    isOpen: false,
    selectedHomework: null,
    errors: null,
    isNewFile: false,
  });

  const [expandedRow, setExpandedRow] = useState(null);
const courseItems = [ 
  {
    xquesid: 1,
    xdate: "2025-06-24",
    xduedate: "2025-04-12",
    xtitle: "xdesc1",
    xmarks: 20,
    xfile_name: "algebra_practice.pdf",
     xdesc: "Complete all exercises from page 42 to 45 in the worksheet.",
    homework_submit: [
      {
        xmarks:18,
        xfile_name: "https://example.com/uploads/student1_algebra_answer.pdf"
      }
    ]
  },
  ]
  const toggleExpand = (index) =>
    setExpandedRow(expandedRow === index ? null : index);

  const handleSearch = async (filters) => {
    try {
      setHomeworkState((prev) => ({
        ...prev,
        items: courseItems ,
        isLoading: true,
        error: null,
      }));

      setExpandedRow(null);

 
      setHomeworkState((prev) => ({
        ...prev,
        items: courseItems ,
        isLoading: false,
        hasSearched: true,
      }));
    } catch (error) {
      setHomeworkState((prev) => ({
        ...prev,
        error:
          error instanceof Error
            ? error
            : new Error("An error occurred while searching"),
        isLoading: false,
        hasSearched: true,
      }));
    }
  };

  const openModal = (homework) => {
    setModalState({
      isOpen: true,
      selectedHomework: homework,
      errors: null,
      isNewFile: false,
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      selectedHomework: null,
      errors: null,
      isNewFile: false,
    });
  };

  const handleSubmit = async (formData) => {};

  return (
    <div>
      <div className="max-w-4xl mx-auto mb-10">
        <HomeworkFilter
          studentEnrollCourses={studentEnrollCourses}
          studentId={studentId}
          onSearch={handleSearch}
        />
      </div>

      {homeworkState.hasSearched && homeworkState.items.length === 0 ? (
        <EmptyList description="No homeworks found according to recent filter" />
      ) : homeworkState.items.length > 0 ? (
        <div className="border rounded-lg">
          <HomeworkTable
             homeworkItems={homeworkState?.items}
            expandedRow={expandedRow}
            toggleExpand={toggleExpand}
            openModal={openModal}
          />
        </div>
      ) : null}

      {modalState?.selectedHomework && (
        <HomeworkModal
          isModalOpen={modalState.isOpen}
          closeModal={closeModal}
          selectedHomework={modalState.selectedHomework}
          errors={modalState.errors}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default ManageHomeWork;
