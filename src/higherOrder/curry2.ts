/**
 * Curries a two-argument function from right to left.
 *
 * @param fun - Two-argument function.
 * @returns A curried version: `(arg2) => (arg1) => result`.
 *
 * @example
 * const add = (a, b) => a + b
 * const curriedAdd = curry2(add)
 * curriedAdd(2)(1) // 3
 */
export function curry2<T1, T2, R>(fun: (arg1: T1, arg2: T2) => R): (arg2: T2) => (arg1: T1) => R {
  return function(arg2: T2) {
    return function(arg1: T1) {
      return fun(arg1, arg2);
    };
  };
}