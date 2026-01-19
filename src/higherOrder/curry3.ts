/**
 * Curries a three-argument function from right to left.
 *
 * @param fun - Three-argument function.
 * @returns A curried version: `(arg3) => (arg2) => (arg1) => result`.
 *
 * @example
 * const multiplyThenAdd = (a, b, c) => a * b + c
 * const curried = curry3(multiplyThenAdd)
 * curried(3)(2)(1) // 1 * 2 + 3 = 5
 */
export function curry3<T1, T2, T3, R>(fun: (arg1: T1, arg2: T2, arg3: T3) => R): (arg3: T3) => (arg2: T2) => (arg1: T1) => R {
  return function(arg3: T3) {
    return function(arg2: T2) {
      return function(arg1: T1) {
        return fun(arg1, arg2, arg3);
      };
    };
  };
}