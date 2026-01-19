import { mapcat } from '../collections/mapcat'

/**
 * Creates a precondition checker that validates an argument against given validators before calling a function.
 *
 * @param validators - Array of validator functions that return `true` if the argument is valid.
 * @returns A function that takes a target function and an argument; throws if any validator fails.
 *
 * @example
 * const isPositive = (x) => x > 0
 * const isInteger = (x) => Number.isInteger(x)
 * const safeIncrement = condition1(isPositive, isInteger)((x) => x + 1)
 * safeIncrement(5) // 6
 * safeIncrement(-1) // throws
 */
export function condition1<T>(...validators: ((x: T) => boolean)[]): (fun: (arg: T) => unknown, arg: T) => unknown {
  return function(fun: (arg: T) => unknown, arg: T) {
    const errors = mapcat(function(isValid: (x: T) => boolean) {
      return isValid(arg) ? [] : [(isValid as unknown as { message: string }).message];
    }, validators);
    if (errors.length > 0) {
      throw new Error(errors.join(', '));
    }
    return fun(arg);
  };
}