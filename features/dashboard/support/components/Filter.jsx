"use client";

import React, { useState } from "react";

export const Filter = ({ filter, setFilter, counts }) => {
  const [countsAll, setCountsAll] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [countsPending, setCountsPending] = useState(0);
  const [countsMyPost, setCountsMyPost] = useState(0);
  const [countsSolved, setCountsSolved] = useState(0);
  const [statusFilter, setStatusFilter] = useState("All");

  return (
    <main className="flex items-center justify-center mt-12 ">
      <div className="mb-4 flex flex-col md:flex-row justify-center items-center md:space-y-0 md:space-x-4">
        <div className="flex flex-wrap gap-4 justify-center">
          {[
            { label: "All", color: "purple", count: countsAll },
            { label: "Pending", color: "yellow", count: countsPending },
            { label: "Solved", color: "green", count: countsSolved },
            { label: "My Post", color: "blue", count: countsMyPost },
          ].map(({ label, color, count }) => (
            <div
              key={label}
              className={`flex items-center gap-2 px-4 py-2 border rounded-lg shadow-md cursor-pointer transition-all duration-300 font-semibold transform hover:scale-105 hover:bg-opacity-90 ${
                statusFilter === label
                  ? `bg-${color}-500 text-white border-transparent`
                  : `border-${color}-500 text-${color}-500 bg-white`
              }`}
              onClick={() => {
                setStatusFilter(label);
                setCurrentPage(1);
              }}
              aria-label={`Filter by ${label}`}
            >
              <span
                className={`font-bold text-lg md:text-xl lg:text-2xl ${
                  statusFilter === label ? "animate-pulse" : ""
                }`}
              >
                {count || 0}
              </span>
              <span className="text-sm sm:text-base">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

Filter.displayName = "Filter";
