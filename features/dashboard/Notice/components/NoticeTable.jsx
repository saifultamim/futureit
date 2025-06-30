import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table";

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

export default NoticeTable;