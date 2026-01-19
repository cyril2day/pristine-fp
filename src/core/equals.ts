/**
 * Curried strict equality check (left‑to‑right). Accepts any values.
 *
 * @param x - First value to compare.
 * @returns A function that takes a second value and returns `true` if `x === y`.
 *
 * @example
 * equals(42)(42) // true
 * equals('foo')('bar') // false
 * equals('foo')(undefined) // false
 */
export function equals(x: unknown) {
  return function(y: unknown) {
    return x === y
  }
}