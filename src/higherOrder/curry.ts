/**
 * Curries a single-argument function.
 * (This is essentially an identity wrapper, provided for consistency.)
 *
 * @param fun - Single-argument function.
 * @returns The same function.
 *
 * @example
 * const addOne = (x) => x + 1
 * const curriedAddOne = curry(addOne)
 * curriedAddOne(5) // 6
 */
export function curry<T, R>(fun: (arg: T) => R): (arg: T) => R {
  return function(arg: T) {
    return fun(arg);
  };
}