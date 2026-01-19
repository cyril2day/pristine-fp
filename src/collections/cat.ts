/**
 * Concatenates zero or more arrays into a single array.
 *
 * @param arrays - Arrays to concatenate.
 * @returns A new array containing all elements of the input arrays in order.
 *
 * @example
 * cat([1,2], [3,4]) // [1,2,3,4]
 * cat([], [1])      // [1]
 */
export function cat<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, arr) => acc.concat(arr), []);
}