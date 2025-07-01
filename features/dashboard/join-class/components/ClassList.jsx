import { dateFormat, formatTimeToUTC } from "@/utils/dateTimeUtils";

import { EmptyList } from "@/components/ui/EmptyList";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import JoinButton from "./JoinButton";

import { Suspense } from "react";
const ClassLists = ({ classes }) => {
  if (classes.length === 0) {
    return (
      <div>
        <Suspense
          fallback={<div className="text-red-200">Loading Classess...</div>}
        >
          <EmptyList description="No classes found according to recent filter" />
        </Suspense>
      </div>
    );
  }

  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50 border-b">
            <TableHead className="font-semibold uppercase">#</TableHead>
            <TableHead className="font-semibold uppercase">Detail</TableHead>
            <TableHead className="font-semibold uppercase">Passcode</TableHead>
            <TableHead className="font-semibold uppercase">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {classes.map((classItem, index) => {
            return (
              <TableRow key={classItem.xclass}>
                <TableCell className="font-medium">
                  <span>{++index}</span>
                </TableCell>
                <TableCell>
                  <p className="flex flex-col gap-1 text-base font-semibold text-red-500">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: classItem?.lesson?.xdesc,
                      }}
                    ></span>
                    <span className=" text-gray-500 text-sm">
                      From: {dateFormat(classItem?.xstartdate)} at{" "}
                      {formatTimeToUTC(classItem?.xstarttime)}
                    </span>
                  </p>
                </TableCell>
                <TableCell>{classItem?.xmeetingpass}</TableCell>
                <TableCell>
                  <JoinButton classItem={classItem} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
export default ClassLists;
