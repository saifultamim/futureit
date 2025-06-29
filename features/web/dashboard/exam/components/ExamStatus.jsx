import moment from "moment-timezone";
import Link from "next/link";
function ExamStatus({ examData }) {
  if (!examData) return null;

  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const currentTime = moment().tz(userTimezone);

  const examStartTime = moment(examData.xdate)
    .tz(userTimezone)
    .set({
      hour: moment(examData.xstarttime ?? "")
        .utc()
        .hour(),
      minute: moment(examData.xstarttime ?? "")
        .utc()
        .minute(),
      second: moment(examData.xstarttime ?? "")
        .utc()
        .second(),
    });

  const examEndTime = moment(examData.xenddate)
    .tz(userTimezone)
    .set({
      hour: moment(examData.xendtime ?? "")
        .utc()
        .hour(),
      minute: moment(examData.xendtime ?? "")
        .utc()
        .minute(),
      second: moment(examData.xendtime ?? "")
        .utc()
        .second(),
    });

  const hasResult = examData?.exam_results?.[0]?.status
    ? Number(examData.exam_results[0].status)
    : null;

  const resultId = examData?.exam_results?.[0]?.id ?? null;

  if (typeof hasResult === "undefined" && hasResult !== null && hasResult < 3) {
    return (
      <Link
        href={`/student/exam/[id]`}
        as={`/student/exam/${examData.xexammstsl}/batch/${examData.xbatch}`}
        target="__blank"
        className="bg-blue-100 text-blue-500 px-3 py-2 rounded-full text-xs font-medium"
      >
        Resume Exam
      </Link>
    );
  } else if (hasResult === 1) {
    return (
      <Link
        href={"/student/exam/[id]"}
        as={`/student/exam/${examData.xexammstsl}/result`}
        className="bg-green-100 text-green-500 px-3 py-2 rounded-full text-xs font-medium"
        target="_blank"
      >
        See Result
      </Link>
    );
  }

  // Check exam status based on the current time and exam start/end times
  if (currentTime.isAfter(examEndTime)) {
    if (!hasResult) {
      return (
        <strong className="bg-red-100 text-red-500 px-3 py-2 rounded-full text-xs font-medium">
          Missed Exam
        </strong>
      );
    }
  } else if (currentTime.isBetween(examStartTime, examEndTime)) {
    return (
      <Link
        href={`/student/exam/[id]`}
        as={`/student/exam/${examData.xexammstsl}`}
        target="__blank"
        className="bg-blue-100 text-blue-500 px-3 py-2 rounded-full text-xs font-medium"
      >
        Start Exam
      </Link>
    );
  } else {
    return (
      <strong className="bg-orange-100 text-orange-500 px-3 py-2 rounded-full text-xs font-medium">
        Upcoming
      </strong>
    );
  }

  return null;
}

export default ExamStatus;
