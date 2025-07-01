import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import { dateFormat } from "@/utils/dateTimeUtils";
import {
  formatDueDateStatus,
  isHomeworkDueDateValid,
} from "@/utils/homeworkValidation";
import React from "react";

const HomeworkTable = ({
  homeworkItems = [],
  expandedRow,
  toggleExpand,
  openModal,
}) => {
  const isDueDatePassed = (dueDate) => {
    if (!dueDate) return false;
    return !isHomeworkDueDateValid(dueDate).isValid;
  };

  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-gray-50 border-b">
          <TableHead className="font-semibold uppercase">#</TableHead>
          <TableHead className="font-semibold uppercase">Date</TableHead>
          <TableHead className="font-semibold uppercase">
            Question Detail
          </TableHead>
          <TableHead className="font-semibold uppercase">Mark Info.</TableHead>
          <TableHead className="font-semibold uppercase">
            Submission Status
          </TableHead>
          <TableHead className="font-semibold uppercase">PDF</TableHead>
          <TableHead className="font-semibold uppercase">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {homeworkItems.map((homework, index) => {
          // Create a new extensible object
          const item = { ...homework };
          const dueDateStatus = formatDueDateStatus(item?.xduedate);
          const isSubmitted = item?.homework_submit?.length === 1;
          const isOverdue = dueDateStatus.isPastDue;

          return (
            <React.Fragment key={item?.xquesid || index}>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="text-center text-gray-700 font-medium">
                  {index + 1}
                </TableCell>
                <TableCell className="text-gray-600">
                  <div className="text-sm">
                    <span className="font-semibold">From:</span>{" "}
                    {item?.xdate && dateFormat(item?.xdate)}
                  </div>
                  <div
                    className={`text-sm ${
                      isOverdue ? "text-red-600 font-medium" : ""
                    }`}
                  >
                    <span className="font-semibold">To:</span>{" "}
                    {item?.xduedate && dateFormat(item?.xduedate)}
                    <div
                      className={`text-sm font-medium mt-1 ${
                        isOverdue
                          ? "text-red-600"
                          : dueDateStatus.isSameDay
                          ? "text-orange-600"
                          : dueDateStatus.daysRemaining <= 2
                          ? "text-yellow-600"
                          : "text-green-600"
                      }`}
                    >
                      {dueDateStatus?.message}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-gray-800 font-semibold text-sm">
                  <div className="flex flex-col justify-between h-full gap-2">
                    <span>{item?.xtitle}</span>
                    <button
                      onClick={() => toggleExpand(index)}
                      className="self-start px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                      {expandedRow === index ? "Hide Details" : "See Details"}
                    </button>
                  </div>
                </TableCell>
                <TableCell className="text-gray-600 space-y-1">
                  <div className="text-sm">
                    <span className="font-semibold">Ques. Mark:</span>{" "}
                    {item?.xmarks}
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">Your Mark:</span>{" "}
                    {item?.homework_submit?.[0]?.xmarks}
                  </div>
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center justify-center px-3 py-1 text-sm font-medium rounded-full ${
                      isSubmitted
                        ? "bg-green-100 text-green-700"
                        : isOverdue
                        ? "bg-red-100 text-red-700"
                        : dueDateStatus.isSameDay
                        ? "bg-orange-100 text-orange-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {isSubmitted
                      ? "Submitted"
                      : isOverdue
                      ? "Overdue"
                      : dueDateStatus.isSameDay
                      ? "Due Today"
                      : "Not Submitted"}
                  </span>
                </TableCell>
                <TableCell className="text-left space-y-2">
                  {item?.xfile_name ||
                  item?.homework_submit?.[0]?.xfile_name ? (
                    <>
                      {item?.xfile_name && (
                        <div>
                          <a
                            href={item?.xfile_name}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline hover:text-blue-700"
                          >
                            View Question
                          </a>
                        </div>
                      )}
                      {item?.homework_submit?.[0]?.xfile_name && (
                        <div>
                          <a
                            href={item?.homework_submit[0]?.xfile_name}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-500 underline hover:text-green-700"
                          >
                            View Your Answer
                          </a>
                        </div>
                      )}
                    </>
                  ) : (
                    <span className="text-gray-500">No resource</span>
                  )}
                </TableCell>
                <TableCell className="text-center">
                  {isOverdue && !isSubmitted ? (
                    <div className="flex flex-col items-center">
                      <button
                        disabled
                        className="px-4 py-1 text-sm font-semibold text-gray-500 bg-gray-200 rounded cursor-not-allowed"
                      >
                        Upload
                      </button>
                      <span className="text-xs text-red-600 mt-1">
                        Deadline passed
                      </span>
                    </div>
                  ) : (
                    <button
                      onClick={() => openModal(item)}
                      className={`px-4 py-1 text-sm font-semibold text-white rounded focus:outline-none focus:ring ${
                        dueDateStatus.isSameDay
                          ? "bg-orange-500 hover:bg-orange-600 focus:ring-orange-300"
                          : "bg-blue-500 hover:bg-blue-600 focus:ring-blue-300"
                      }`}
                    >
                      {dueDateStatus.isSameDay ? "Upload Today" : "Upload"}
                    </button>
                  )}
                </TableCell>
              </TableRow>

              {expandedRow === index && (
                <TableRow>
                  <TableCell colSpan={8} className="bg-gray-50">
                    <div className="px-4 text-sm text-gray-600">
                      <h3 className="font-bold text-gray-800">
                        {item?.xtitle}
                      </h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html:
                            item?.xdescription ??
                            "No additional details available.",
                        }}
                      />
                      {isOverdue && !isSubmitted ? (
                        <p className="mt-2 text-red-600 font-medium">
                          Note: The submission deadline has passed.
                        </p>
                      ) : dueDateStatus.isSameDay && !isSubmitted ? (
                        <p className="mt-2 text-orange-600 font-medium">
                          Note: This homework is due today.
                        </p>
                      ) : null}
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default HomeworkTable;
