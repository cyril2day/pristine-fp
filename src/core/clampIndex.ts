import { clamp } from './clamp'

/**
 * Clamps an index to be within the bounds of an array (0 ≤ index < length).
 * Returns -1 if the array is empty.
 *
 * @param index - Index to clamp.
 * @param length - Length of the array.
 * @returns Clamped index, or -1 if length ≤ 0.
 *
 * @example
 * clampIndex(2, 5)   // 2
 * clampIndex(-1, 5)  // 0
 * clampIndex(10, 5)  // 4
 * clampIndex(0, 0)   // -1
 */
export function clampIndex(index: number, length: number): number {
  if (length <= 0) return -1
  return clamp(0, length - 1, index)
}