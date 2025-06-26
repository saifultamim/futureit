import moment from "moment-timezone";

/**
 * Formats a date string to "DD-MM-YYYY".
 * Example: "2025-01-08T14:00:00Z" -> "08-01-2025"
 */
export const dateFormat = (date) => moment(date).format("DD-MM-YYYY");

/**
 * Formats time from a date string to "hh:mm A".
 * Example: "2025-01-08T14:00:00Z" -> "02:00 PM"
 */
export const timeFormat = (date) => moment(date).format("hh:mm A");

/**
 * Formats date and time to "DD-MM-YYYY hh:mm A".
 * Example: "2025-01-08T14:00:00Z" -> "08-01-2025 02:00 PM"
 */
export const dateTimeFormat = (date) =>
  moment(date).format("DD-MM-YYYY hh:mm A");

/**
 * Formats date and time to "YYYY-MM-DD hh:mm A".
 * Example: "2025-01-08T14:00:00Z" -> "2025-01-08 02:00 PM"
 */
export const dateTimeFormat2 = (date) =>
  moment(date).format("YYYY-MM-DD hh:mm A");

/**
 * Formats time to local "hh:mm:ss AM/PM" in UTC.
 */
export const formatTimeToUTC = (time) =>
  new Date(time).toLocaleTimeString("en-US", { timeZone: "UTC" });

export const mergeDateTime = (dateStr, timeStr) => {
  const datePart = dateStr.split("T")[0]; // Extract YYYY-MM-DD
  const timePart = timeStr.split("T")[1]; // Extract HH:mm:ss
  console.log("datepart", datePart);
  return new Date(`${datePart}T${timePart}`);
};
