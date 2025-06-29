/**
 * Checks if a homework due date has passed
 * @param dueDateStr - The due date string to check
 * @returns An object containing validation result and message
 */
export function isHomeworkDueDateValid(dueDateStr) {
  // If no due date is provided, consider it valid
  if (!dueDateStr) {
    return { isValid: true, message: "" };
  }

  // Parse the due date and set it to the end of the day (23:59:59)
  const dueDate = new Date(dueDateStr);
  dueDate.setHours(23, 59, 59, 999);

  const currentDate = new Date();

  // Check if current date is after the end of the due date
  if (currentDate > dueDate) {
    return {
      isValid: false,
      message:
        "Submission deadline has passed. You cannot submit this homework anymore.",
    };
  }

  return { isValid: true, message: "" };
}

/**
 * Formats a date object or string into a human-readable format
 * @param date - Date to format
 * @param includeTime - Whether to include time in the formatting
 * @returns Formatted date string
 */
export function formatDueDateStatus(dueDateStr) {
  if (!dueDateStr) {
    return {
      isPastDue: false,
      isSameDay: false,
      daysRemaining: 0,
      message: "No due date",
    };
  }

  // Parse the due date and set it to the end of the day
  const dueDate = new Date(dueDateStr);
  dueDate.setHours(23, 59, 59, 999);

  const currentDate = new Date();
  // Set current date to start of day for day comparison
  const currentDay = new Date(currentDate);
  currentDay.setHours(0, 0, 0, 0);

  // Set due date to start of day for day comparison
  const dueDateDay = new Date(dueDate);
  dueDateDay.setHours(0, 0, 0, 0);

  // Calculate days remaining (same day = 0)
  const timeDiff = dueDateDay.getTime() - currentDay.getTime();
  const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));

  // Check if due date is in the past
  const isPastDue = currentDate > dueDate;

  // Check if due date is today
  const isSameDay = daysRemaining === 0;

  // Generate appropriate message
  let message = "";
  if (isPastDue) {
    message = "Deadline passed";
  } else if (isSameDay) {
    message = "Due today";
  } else if (daysRemaining === 1) {
    message = "Due tomorrow";
  } else {
    message = `${daysRemaining} days remaining`;
  }

  return {
    isPastDue,
    isSameDay,
    daysRemaining,
    message,
  };
}
