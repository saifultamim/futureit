"use client";

import { dateFormat } from "@/utils/dateTimeUtils";
import { useState } from "react";

const ExpandableNoticeRow = ({ notice }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <>
      <tr className="border-b hover:bg-gray-50 transition">
        <td className="px-6 py-4 text-sm text-gray-700 font-medium">
          {notice?.xdate && dateFormat(notice?.xdate)}
        </td>
        <td className="px-6 py-4 text-sm text-gray-700 font-medium">
          {notice?.seitem?.xdesc}
        </td>
        <td className="px-6 py-4 text-sm text-gray-700 font-medium">
          {" "}
          {notice?.batch?.xbatchname}
        </td>
        <td className="px-6 py-4 text-sm text-gray-700 font-medium">
          <div className="flex flex-col justify-between h-full gap-2">
            <button
              onClick={toggleExpand}
              className="self-start px-3 py-1 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
            >
              {isExpanded ? "Hide Notice" : "See Notice"}
            </button>
          </div>
        </td>
      </tr>
      {isExpanded && (
        <tr className="bg-gray-50">
          <td colSpan={4} className="px-6 py-4">
            <div>
              <h3 className="text-lg font-medium mb-2 text-gray-900">
                {notice?.xtitle}
              </h3>
              <p
                className="text-sm text-gray-700 whitespace-pre-line"
                dangerouslySetInnerHTML={{
                  __html:
                    notice?.xdescription ?? "No additional details available.",
                }}
              />
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default ExpandableNoticeRow;
