"use client";


import React, { useState } from "react";
import HomeworkFilter from "./HomeWorkFilter";
import { EmptyList } from "@/components/ui/EmptyList";
import HomeworkTable from "./HomeWorkTable";
import HomeworkModal from "./HomeWorkModal";



const ManageHomeWork = ({
  studentEnrollCourses,
  studentId,
}) => {
  const [homeworkState, setHomeworkState] = useState({
    items: [],
    isLoading: false,
    hasSearched: false,
    error: null,
  });

  const [modalState, setModalState] = useState({
    isOpen: false,
    selectedHomework: null ,
    errors: null ,
    isNewFile: false,
  });

  const [expandedRow, setExpandedRow] = useState(null);

  const toggleExpand = (index) =>
    setExpandedRow(expandedRow === index ? null : index);

  const handleSearch = async (filters) => {
     console.log('++++++++++++++++++++++++++++++++++++++++++ ')
        if (!filters) {
      return <div> filter</div>;
  }
    try {
      setHomeworkState((prev) => ({
        ...prev,
        items: [
  {
    xitemcode: "DSA101",
    xbatch: "3",
    xstudent: "2025001",
    description: "Solved all exercises from lesson 3.",
    xquesid: "1",
    submissionId: null,
       homework_submit: [
      {
        xmarks:10,
        xfile_name: "https://drive.google.com/file/d/abc123xyz456/view?usp=sharing"
      }
    ],
    xduedate: "2025-07-10",
    existingFileKey: null
  },
  {
    xitemcode: "WD202",
    xbatch: "5",
    xstudent: "2025002",
    description: "Implemented responsive layout using CSS Grid.",
    xquesid: 2,
    submissionId: "9",
   homework_submit: [
      {
        xmarks:18,
        xfile_name: "this is pdf"
      }
    ],
    xduedate: "2025-07-05",
    existingFileKey: "file-key-123"
  }
]
,
        isLoading: true,
        error: null,
      }));

      setExpandedRow(null);

      // const results = await searchHomework(filters);
      // setHomeworkState((prev) => ({
      //   ...prev,
      //   items: results,
      //   isLoading: false,
      //   hasSearched: true,
      // }));
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

  const handleSubmit = async (formData) => {
    try {
      const { selectedHomework, isNewFile } = modalState;

      formData.set("xstudent", studentId);
      formData.set("xitemcode", selectedHomework?.xitemcode || "");
      formData.set("xbatch", selectedHomework?.xbatch || "");
      formData.set("xduedate", selectedHomework?.xduedate || "");

      const result = await submitHomework(formData);
      if (result.success) {
        const updatedHomeworkItems = homeworkState.items.map(
          (item) =>
            item.xquesid === selectedHomework?.xquesid
              ? { ...item, homework_submit: [result?.data] }
              : item
        );

        setHomeworkState((prev) => ({
          ...prev,
          items: updatedHomeworkItems,
        }));

        closeModal();
      } else {
        setModalState((prev) => ({
          ...prev,
          errors: result.errors || null,
        }));
      }
    } catch (error) {
      setModalState((prev) => ({
        ...prev,
        errors: {
          general: ["Failed to submit homework. Please try again."],
        },
      }));
    }
  };

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
            homeworkItems={homeworkState.items}
            expandedRow={expandedRow}
            toggleExpand={toggleExpand}
            openModal={openModal}
          />
   
        </div>
      ) : null}

      {modalState.selectedHomework && (
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
