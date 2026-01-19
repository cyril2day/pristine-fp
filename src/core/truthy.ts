import { existy } from './existy'

/**
 * Returns `true` if `x` is not `false` and `existy(x)` is true.
 *
 * @param x - Any value.
 * @returns `true` if `x` is not `false` and exists.
 *
 * @example
 * truthy(false)    // false
 * truthy(null)     // false
 * truthy(undefined) // false
 * truthy(0)        // true
 * truthy('')       // true
 *
 * @see “Functional JavaScript” – Chapter 1, “A Taste of Functional JavaScript”
 */
export function truthy(x: unknown): boolean {
  return (x !== false) && existy(x)
}