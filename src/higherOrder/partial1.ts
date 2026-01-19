/**
 * Partially applies the first argument to a function.
 *
 * @param fun - Two-argument function.
 * @param arg1 - First argument to apply.
 * @returns A function that takes the second argument and returns the result.
 *
 * @example
 * const add = (a, b) => a + b
 * const addFive = partial1(add, 5)
 * addFive(3) // 8
 */
export function partial1<T1, T2, R>(fun: (arg1: T1, arg2: T2) => R, arg1: T1): (arg2: T2) => R {
  return function(arg2: T2) {
    return fun(arg1, arg2);
  };
}