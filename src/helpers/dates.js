function _chunk(arr, chunkSize) {
  const result = [];
  for (let i = 0, len = arr.length; i < len; i += chunkSize)
    result.push(arr.slice(i, i + chunkSize));
  return result;
}

/**
 * Generates 5x7 Dates matrix
 * @param {number} year - selected year
 * @param {number} month - selected month
 */
export function generateMonthMatrix(year, month) {
  // divide one extra empty day if first day of week is sunday
  const startOffset = getFirstDayOfWeekName() === "sunday" ? -1 : 0;
  const array = new Array(35);
  var firstDay = new Date(year, month, 1);

  for (
    let i = firstDay.getDay() + startOffset;
    i < 35 && firstDay.getMonth() === month;
    i++
  ) {
    array[i] = new Date(firstDay);
    firstDay.setDate(firstDay.getDate() + 1);
  }

  return _chunk(array, 7);
}

/**
 * Get first day of week by locale configuration - currently hardcoded
 * @returns {"monday" | "sunday"} name of the first day of week - monday or sunday
 */
export function getFirstDayOfWeekName() {
  return "sunday";
}

/**
 * Get list of all weekdays
 * @param {{full: boolean}} config
 * @returns {Array<string>} array with all weekdays
 */
export function getWeekdays({ full } = { full: false }) {
  const commonDays = full
    ? ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    : ["Mo", "Tu", "We", "Th", "Fr", "Sa"];

  let days;

  if (getFirstDayOfWeekName() === "sunday") {
    days = [full ? "Sunday" : "Su", ...commonDays];
  } else {
    days = [...commonDays, full ? "Sunday" : "Su"];
  }

  return days;
}
