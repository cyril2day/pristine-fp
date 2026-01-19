/**
 * Functional if‑else branching.
 * Returns the result of `thenFn` if `condition` is truthy, otherwise the result of `elseFn`.
 *
 * @param condition - A function that returns a boolean.
 * @param thenFn - Function to execute when condition is truthy.
 * @param elseFn - Function to execute when condition is falsy.
 * @returns The result of `thenFn` or `elseFn`.
 *
 * @example
 * ifElse(
 *   () => score > 60,
 *   () => 'pass',
 *   () => 'fail'
 * )() // 'pass' or 'fail'
 */
export function ifElse<T, U>(
  condition: () => boolean,
  thenFn: () => T,
  elseFn: () => U
): T | U {
  return condition() ? thenFn() : elseFn()
}

/**
 * Curried version of `ifElse` (using manual currying).
 */
export function ifElseC<T, U>(condition: () => boolean) {
  return function(thenFn: () => T) {
    return function(elseFn: () => U) {
      return condition() ? thenFn() : elseFn()
    }
  }
}