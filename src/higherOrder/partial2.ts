/**
 * Partially applies the first two arguments to a function.
 *
 * @param fun - Three-argument function.
 * @param arg1 - First argument to apply.
 * @param arg2 - Second argument to apply.
 * @returns A function that takes the third argument and returns the result.
 *
 * @example
 * const sumThree = (a, b, c) => a + b + c
 * const sumWithOneTwo = partial2(sumThree, 1, 2)
 * sumWithOneTwo(3) // 6
 */
export function partial2<T1, T2, T3, R>(fun: (arg1: T1, arg2: T2, arg3: T3) => R, arg1: T1, arg2: T2): (arg3: T3) => R {
  return function(arg3: T3) {
    return fun(arg1, arg2, arg3);
  };
}