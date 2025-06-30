"use client";
import { useCallback, useState } from "react";

export const useExamState = () => {
  const [examState, setExamState] = useState({
    regularExams: [],
    reexams: [],
    isLoading: false,
    hasSearched: false,
    error: null,
    //      examData : {
    //   xexammstsl: '',
    //   xitemcode: '',
    //   xbatch: '',
    //   xlesson: '',
    //   xlessonno: '',
    //   xtitle: '',
    //   xdescription: '',
    //   xset: '',
    //   xdate: '',
    //   xstarttime: '',
    //   xendtime: '',
    //   xenddate: '',
    // }
  });

  //   const handleSearch = useCallback(async (filters) => {
  //     try {
  //       setExamState((prev) => ({
  //         ...prev,
  //         isLoading: true,
  //         error: null,
  //       }));

  //       const results = await searchExam(filters);

  //       setExamState({
  //         regularExams: results.regularExams,
  //         reexams: results.reexams,
  //         isLoading: false,
  //         hasSearched: true,
  //         error: null,
  //       });
  //     } catch (error) {
  //       setExamState((prev) => ({
  //         ...prev,
  //         isLoading: false,
  //         hasSearched: true,
  //         error:
  //           error instanceof Error
  //             ? error
  //             : new Error("An error occurred while searching"),
  //       }));
  //     }
  //   }, []);
  const handleSearch = useCallback(async (filters) => {
    try {
      setExamState((prev) => ({
        ...prev,
        isLoading: true,
        error: null,
      }));
      console.log("----------------------------------------- handlesearch");
      const results = {
        regularExams: [
          {
            xexammstsl: "1001",
            xdate: "2025-07-12",
            xset: "B",
            xstarttime: "8:00",
            xendtime: "10:00",
          },
          {
            xexammstsl: "1002",
            xdate: "2025-07-12",
            xset: "B",
            xstarttime: "8:00",
            xendtime: "10:00",
          },
        ],
        reexams: [
          {
            xexammstsl: "1003",
            xdate: "2025-07-12",
            xset: "B",
            xstarttime: "8:00",
            xendtime: "10:00",
          },
          {
            xexammstsl: "1004",
            xdate: "2025-07-12",
            xset: "B",
            xstarttime: "8:00",
            xendtime: "10:00",
          },
        ],
      };

      setExamState({
        regularExams: results?.regularExams,
        reexams: results?.reexams,
        isLoading: false,
        hasSearched: true,
        error: null,
      });
    } catch (error) {
      setExamState((prev) => ({
        ...prev,
        isLoading: false,
        hasSearched: true,
        error:
          error instanceof Error
            ? error
            : new Error("An error occurred while searching"),
      }));
    }
  }, []);
  return {
    examState,
    handleSearch,
  };
};
