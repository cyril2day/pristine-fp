import { cat } from '../collections/cat'

/**
 * Partially applies any number of arguments to a function.
 *
 * @param fun - Function to partially apply.
 * @param pargs - Arguments to apply.
 * @returns A function that takes the remaining arguments and calls `fun` with all arguments combined.
 *
 * @example
 * const add = (a, b, c) => a + b + c
 * const addOneTwo = partial(add, 1, 2)
 * addOneTwo(3) // 6
 */
export function partial(fun: (...args: unknown[]) => unknown, ...pargs: unknown[]): (...args: unknown[]) => unknown {
  return function(...args: unknown[]) {
    return fun.apply(fun, cat(pargs, args));
  };
}