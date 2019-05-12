function _chunk(arr, chunkSize) {
  const result = [];
  for (let i = 0, len = arr.length; i < len; i += chunkSize)
    result.push(arr.slice(i, i + chunkSize));
  return result;
}

/**
 * Generates 5x7 Dates matrix
 * @param {number} year - selected year
 * @param {month} month - selected month
 */
export function generateMonthMatrix(year, month) {
  const array = new Array(35);
  var firstDay = new Date(year, month, 1);

  for (
    let i = firstDay.getDay();
    i < 35 && firstDay.getMonth() === month;
    i++
  ) {
    array[i] = new Date(firstDay);
    firstDay.setDate(firstDay.getDate() + 1);
  }

  return _chunk(array, 7);
}
