/**
 * Cycles an index within an array by a delta, wrapping around at boundaries.
 * Returns the new index.
 *
 * @param current - Current index.
 * @param delta - Step size (positive or negative).
 * @param length - Length of the array.
 * @returns New index after cycling, or -1 if length ≤ 0.
 *
 * @example
 * cycleIndex(2, 1, 5)   // 3
 * cycleIndex(4, 1, 5)   // 0
 * cycleIndex(0, -1, 5)  // 4
 * cycleIndex(0, 0, 5)   // 0
 */
export function cycleIndex(current: number, delta: number, length: number): number {
  if (length <= 0) return -1
  return (current + delta + length) % length
}