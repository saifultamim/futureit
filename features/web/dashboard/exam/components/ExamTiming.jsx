const ExamTiming = ({
  startTime,
  endTime,
}) => (
  <div className="flex flex-col gap-2">
    <span>
      <strong>Start:</strong> {startTime && formatTimeToUTC(startTime)}
    </span>
    <span>
      <strong>End:</strong> {endTime && formatTimeToUTC(endTime)}
    </span>
  </div>
);