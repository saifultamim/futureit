"use client";

import { useState, useEffect } from "react";
import moment from "moment-timezone";
import { Icons } from "@/components/Icon";

export function ExamTimerCountdown(examData) {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isTimeAlmostUp, setIsTimeAlmostUp] = useState(false);
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const examEndTime = moment(examData?.exam?.xenddate)
    .tz(userTimezone)
    .set({
      hour: moment(examData?.exam?.xendtime ?? "")
        .utc()
        .hour(),
      minute: moment(examData?.exam?.xendtime ?? "")
        .utc()
        .minute(),
      second: moment(examData?.exam?.xendtime ?? "")
        .utc()
        .second(),
    });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = moment().tz(userTimezone);
      const timeLeft = examEndTime.valueOf() - currentTime.valueOf();

      if (timeLeft < 0) {
        clearInterval(intervalId);
        setTimeRemaining(0);
        setIsTimeAlmostUp(false);
      } else {
        setTimeRemaining(Math.floor(timeLeft / 1000));

        setIsTimeAlmostUp(timeLeft <= 5 * 60 * 1000);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [examData?.exam?.xendtime]);

  const gradientColor = isTimeAlmostUp
    ? "from-red-500 to-pink-500"
    : "from-purple-500 to-indigo-500";

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
  };

  return (
    <div
      className={`fixed top-20 right-8 border rounded-lg shadow-md px-6 py-2 transition-colors duration-500 ${
        isTimeAlmostUp
          ? " text-white border-red-400 animate-pulse"
          : "bg-white text-gray-800 border-gray-200"
      }`}
    >
      <div className="flex items-center space-x-2">
        <Icons.clock className="w-5 h-5 text-indigo-600" />
        <span className="text-lg font-semibold text-gray-800">
          {formatTime(timeRemaining)}
        </span>
      </div>
    </div>
  );
}
