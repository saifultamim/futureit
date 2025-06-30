'use client'
import React from "react";
import ExamFilter from "./ExamFilter";

import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { ErrorAlert } from "@/components/ui/ErrorAlert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table";
import { useExamState } from "@/hooks/useExamState";
import { ExamType, TAB_CONFIG } from "@/utils/data/constant";
import ExamStatus from "./ExamStatus";
import { dateFormat } from "@/utils/dateTimeUtils";
import ExamTiming from "./ExamTiming";


const ManageExam = () => {
    const { examState, handleSearch } = useExamState();
  const { isLoading, error, hasSearched, } = examState;
  // const exam = [
  //   {xexammstsl:"1001",xdate:"2025-07-12",xset:"B",xstarttime:"8:00",xendtime:"10:00"},
  // {xexammstsl:"1002",xdate:"2025-07-12",xset:"B",xstarttime:"8:00",xendtime:"10:00"}
  // ]
  console.log('+++++ examstate ++++++++++ ',examState)
  return (
    <div>
      <div className="max-w-4xl mx-auto mb-10">
        <ExamFilter onSearch={handleSearch} />
      </div>

      {isLoading ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorAlert />
      ) : (
        hasSearched && (
          <div className="border rounded-lg">
            <ExamTabs examState={examState} />
          </div>
        )
      )}
    </div>
  );
};

const ExamTabs = ({ examState }) => (
  <Tabs defaultValue={ExamType.REGULAR} className="w-full">
    <TabsList className="m-4">
      {TAB_CONFIG.map(({ type, label }) => {
        const exams =
          type === ExamType.REGULAR
            ? examState.regularExams
            : examState.reexams;
        return (
          <TabsTrigger key={type} value={type}>
            {label}
            {exams.length > 0 && <ExamBadge count={exams.length} />}
          </TabsTrigger>
        );
      })}
    </TabsList>

    {TAB_CONFIG.map(({ type, emptyMessage }) => {
      const exams =
        type === ExamType.REGULAR ? examState.regularExams : examState.reexams;
      return (
        <TabsContent key={type} value={type}>
          {exams.length > 0 ? (
            <ExamTable examItems={exams} />
          ) : (
            <EmptyList description={emptyMessage} />
          )}
        </TabsContent>
      );
    })}
  </Tabs>
);
ExamTabs.displayName = "ExamTabs";

const ExamBadge = ({ count }) => (
  <span className="ml-2 w-6 h-6 flex items-center justify-center text-xs font-semibold bg-red-500/80 text-white rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
    {count}
  </span>
);
ExamBadge.displayName = "ExamBadge";

const ExamTable = ({ examItems }) => (
  <Table className="table-auto">
    <TableHeader>
      <TableRow className="bg-gray-50 border-b">
        <TableHead>#</TableHead>
        <TableHead>Date</TableHead>
        <TableHead>Set</TableHead>
        <TableHead>Timing</TableHead>
        <TableHead>Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {examItems.map((exam, index) => (
        <ExamTableRow key={exam.xexammstsl} exam={exam} index={index} />   
      ))}
    </TableBody>
  </Table>
);
ExamTable.displayName = "ExamTable";

const ExamTableRow = ({ exam, index }) => (
  <TableRow className="hover:bg-gray-50">
    <TableCell>{index + 1}</TableCell>
    <TableCell>{exam?.xdate && dateFormat(exam.xdate)}</TableCell>     
    <TableCell>{exam?.xset}</TableCell>
    <TableCell>
      <ExamTiming startTime={exam?.xstarttime} endTime={exam?.xendtime} />
    </TableCell>
    <TableCell>
      <ExamStatus examData={exam} />
    </TableCell>
  </TableRow>
);
ExamTableRow.displayName = "ExamTableRow";

export default ManageExam;
