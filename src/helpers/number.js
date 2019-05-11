/**
 * Checks if value is between range
 * @param {number} min - minimal value
 * @param {number} max - maximal value
 * @returns {function} a function that validate if value is between
 */
export const isBetween = (min, max) => val => min <= val && val <= max;

/**
 * Checks if value is positive
 * @param {number} val - given value
 * @returns {bolean}
 */
export const isPositive = val => 0 <= val;
