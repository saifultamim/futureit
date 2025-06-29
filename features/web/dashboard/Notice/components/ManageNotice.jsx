"use client";

import NoticeFilter from "./NoticeFilter";
import React, { useState } from "react";

import NoticeTable from "./NoticeTable";
import { EmptyList } from "@/components/ui/EmptyList";

const ManageNotice = ({ studentEnrollCourses, studentId }) => {
  const [noticeState, setNoticeState] = useState({
    items: [],
    isLoading: false,
    hasSearched: false,
    error: null,
  });

  const [expandedRow, setExpandedRow] = useState(null);

  const toggleExpand = (index) =>
    setExpandedRow(expandedRow === index ? null : index);

  const handleSearch = async (filters) => {};

  return (
    <div>
      <div className="max-w-4xl mx-auto mb-10">
        <NoticeFilter
          studentEnrollCourses={studentEnrollCourses}
          studentId={studentId}
          onSearch={handleSearch}
        />
      </div>

      {noticeState.hasSearched && noticeState.items.length === 0 ? (
        <EmptyList description="No notice found according to recent filter" />
      ) : noticeState.items.length > 0 ? (
        <div className="border rounded-lg">
          <NoticeTable
            noticeItems={noticeState.items}
            expandedRow={expandedRow}
            toggleExpand={toggleExpand}
          />
        </div>
      ) : null}
    </div>
  );
};

export default ManageNotice;
