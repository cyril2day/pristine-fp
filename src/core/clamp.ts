/**
 * Clamps a numeric value between a lower and upper bound.
 *
 * @param min - Lower bound (inclusive).
 * @param max - Upper bound (inclusive).
 * @param value - Value to clamp.
 * @returns `value` clamped between `min` and `max`.
 * @throws If `min` is greater than `max`.
 *
 * @example
 * clamp(0, 10, 5)   // 5
 * clamp(0, 10, -5)  // 0
 * clamp(0, 10, 15)  // 10
 */
export function clamp(min: number, max: number, value: number): number {
  if (min > max) throw new Error('min must be less than or equal to max')
  return Math.max(min, Math.min(max, value))
}