/**
 * Returns `true` if `x` is not `null` and not `undefined`.
 *
 * @param x - Any value.
 * @returns `true` if `x` is neither `null` nor `undefined`.
 *
 * @example
 * existy(null)      // false
 * existy(undefined) // false
 * existy(0)         // true
 * existy('')        // true
 *
 * @see “Functional JavaScript” – Chapter 1, “A Taste of Functional JavaScript”
 */
export function existy(x: unknown): boolean {
  return x != null
}