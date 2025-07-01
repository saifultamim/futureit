import { ErrorAlert } from "@/components/ui/ErrorAlert";

const alertStyles = {
  EXAM_NOT_FOUND: {
    title: "Exam Not Found",
    color: "bg-yellow-100 border-yellow-400 text-yellow-700",
  },
  EXAM_NOT_STARTED: {
    title: "Exam Not Started",
    color: "bg-blue-100 border-blue-400 text-blue-700",
  },
  EXAM_EXPIRED: {
    title: "Exam Expired",
    color: "bg-red-100 border-red-400 text-red-700",
  },
  ALREADY_PASSED: {
    title: "Exam Already Passed",
    color: "bg-green-100 border-green-400 text-green-700",
  },
  EXAM_ALREADY_SUBMITTED: {
    title: "Exam Submitted",
    color: "bg-gray-100 border-gray-400 text-gray-700",
  },
  EXAM_NOT_AUTHORIZED: {
    title: "Not Authorized",
    color: "bg-red-100 border-red-400 text-red-700",
  },
  FETCH_ERROR: {
    title: "Error fetching to exam",
    color: "bg-red-100 border-red-400 text-red-700",
  },
};

export function ValidationAlerts({ type, message }) {
  const alert = alertStyles[type];
  if (!alert) return null;

  return (
    <>
      <ErrorAlert
        title={alert.title}
        description={message}
        className={alert.color}
      />
    </>
  );
}
