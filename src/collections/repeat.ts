/**
 * Returns an array containing `value` repeated `n` times.
 *
 * @param n - Number of repetitions.
 * @param value - Value to repeat.
 * @returns Array of length `n` filled with `value`. Returns empty array if `n ≤ 0`.
 *
 * @example
 * repeat(3, 'x') // ['x', 'x', 'x']
 * repeat(2, 42)  // [42, 42]
 */
export function repeat<T>(n: number, value: T): T[] {
  return Array.from({ length: n }, () => value);
}