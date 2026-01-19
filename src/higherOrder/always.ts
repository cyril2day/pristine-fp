/**
 * Returns a function that always returns the given value.
 *
 * @param value - Value to always return.
 * @returns A function that returns `value` regardless of its arguments.
 *
 * @example
 * const alwaysTrue = always(true)
 * alwaysTrue()        // true
 * alwaysTrue('ignored') // true
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function always<T>(value: T): (...args: any[]) => T {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  return (...args: any[]) => value;
}