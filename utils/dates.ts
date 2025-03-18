import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const NEPAL_TIMEZONE = "Asia/Kathmandu"; // Nepal Time Zone (UTC+5:45)

/**
 * Formats a given date string into 'MMM DD, YYYY' format in Nepal Time
 */
export const getFormattedDate = (date: string) => {
  return dayjs.utc(date).tz(NEPAL_TIMEZONE).format("MMM DD, YYYY");
};

/**
 * Calculates days left from today to a given startDate
 */
export const calculateDaysLeft = (startDate: Date | string) => {
  const eventDate = dayjs.utc(startDate).tz(NEPAL_TIMEZONE).startOf("day");
  const today = dayjs().tz(NEPAL_TIMEZONE).startOf("day");

  const daysLeft = eventDate.diff(today, "days");
  return daysLeft > 0 ? daysLeft : 0;
};

/**
 * Formats a given date string into 'h:mm A' format in Nepal Time
 */
export function getFormattedTime(dateString: Date | string) {
  return dayjs.utc(dateString).tz(NEPAL_TIMEZONE).format("h:mm A");
}

/**
 * Formats a given date string into 'YYYY-MM-DD' format in Nepal Time
 */
export const getFormattedDateT = (date: string) => {
  return dayjs.utc(date).tz(NEPAL_TIMEZONE).format("YYYY-MM-DD");
};

/**
 * Formats the given start and end dates into a human-readable date range string.
 * If the start and end dates are the same, it will return a single date string.
 * Otherwise, it will return a range string in the format 'MMM DD, YYYY - MMM DD, YYYY'
 */
export const formatEventDateRange = (startDate?: string, endDate?: string) => {
  const formattedStartDate = getFormattedDate(startDate || "");
  const formattedEndDate = getFormattedDate(endDate || "");
  
  return formattedStartDate === formattedEndDate
    ? formattedStartDate
    : `${formattedStartDate} - ${formattedEndDate}`;
}
