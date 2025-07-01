"use client";

import { useState } from "react";
import Link from "next/link";

const JoinButton = ({ classItem }) => {
  const [loading, setLoading] = useState({
    initial: true,
    redirecting: false,
  });
  const [hasAttended, setHasAttended] = useState(false);
  const saveAttendance = async (event, classItem) => {
    event.preventDefault();
    setLoading({ initial: false, redirecting: true });
    setHasAttended(true);
  };
  return hasAttended ? (
    <Link href={classItem?.xjoinlink} target="_blank">
      <button className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-xs font-medium">
        Join Class
      </button>
    </Link>
  ) : (
    <button
      className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-xs font-medium"
      onClick={(event) => saveAttendance(event, classItem)}
      disabled={loading?.redirecting}
    >
      Join Class
    </button>
  );
};

export default JoinButton;
