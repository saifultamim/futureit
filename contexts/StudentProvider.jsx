"use client";

import { createContext, useContext, ReactNode } from "react";


const StudentContext = createContext(undefined);

export function StudentProvider({
  children,
  initialData,
}) {
  return (
    <StudentContext.Provider
      value={{
        student: initialData.student,
        enrolledCourses: initialData.enrolledCourses,
        isLoading: false,
        error: null,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export function useStudent() {
  const context = useContext(StudentContext);
  if (context === undefined) {
    // throw new Error("useStudent must be used within a StudentProvider");
  }
  return context;
}
