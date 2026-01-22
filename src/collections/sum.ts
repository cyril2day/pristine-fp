/**
 * Computes the sum of an array of numbers.
 *
 * @param numbers - Array of numbers to sum.
 * @returns The sum of the numbers, or 0 if the array is empty.
 *
 * @example
 * sum([1, 2, 3]) // 6
 * sum([]) // 0
 */
export function sum(numbers: number[]): number {
  return numbers.reduce((acc, val) => acc + val, 0);
}