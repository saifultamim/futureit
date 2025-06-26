"use client";

import NoticeFilter from "./NoticeFilter";
import { Course, NoticeItem } from "../types";
import React, { useState } from "react";
import { searchNotice } from "../actions/notice";
import { EmptyList } from "@/components/ui/EmptyList";



const ManageNotice = ({
  studentEnrollCourses,
  studentId,
}) => {
  const [noticeState, setNoticeState] = useState({
    items: [],
    isLoading: false,
    hasSearched: false,
    error: null,
  });

  const [expandedRow, setExpandedRow] = useState(null);

  const toggleExpand = (index) =>
    setExpandedRow(expandedRow === index ? null : index);

  const handleSearch = async (filters) => {
   
  };

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

const NoticeTable = ({
  noticeItems,
  expandedRow,
  toggleExpand,
}) => (
  <Table className="table-auto">
    <TableHeader>
      <TableRow className="bg-gray-50 border-b">
        <TableHead className="font-semibold uppercase">#</TableHead>
        <TableHead className="font-semibold uppercase">Date</TableHead>
        <TableHead className="font-semibold uppercase">Notice Detail</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {noticeItems.map((notice, index) => (
        <React.Fragment key={notice.xsl}>
          <TableRow className="hover:bg-gray-50">
            <TableCell className=" text-gray-700 font-medium ">
              {index + 1}
            </TableCell>
            <TableCell className="text-gray-600 ">
              <div className="text-sm">
                {notice?.xdate && dateFormat(notice?.xdate)}
              </div>
            </TableCell>
            <TableCell className="text-gray-800 font-semibold text-sm">
              <div className="flex flex-col justify-between h-full gap-2">
                <span>{notice?.xtitle}</span>
                <button
                  onClick={() => toggleExpand(index)}
                  className="self-start px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                  {expandedRow === index ? "Hide Details" : "See Details"}
                </button>
              </div>
            </TableCell>
          </TableRow>

          {expandedRow === index && (
            <TableRow>
              <TableCell colSpan={8} className="bg-gray-50">
                <div className="px-4 text-sm text-gray-600">
                  <h3 className="font-bold text-gray-800">{notice?.xtitle}</h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        notice?.xdescription ??
                        "No additional details available.",
                    }}
                  />
                </div>
              </TableCell>
            </TableRow>
          )}
        </React.Fragment>
      ))}
    </TableBody>
  </Table>
);

export default ManageNotice;
