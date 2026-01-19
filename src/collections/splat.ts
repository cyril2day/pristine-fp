/**
 * Takes a function expecting individual arguments and returns a function that takes an array of those arguments.
 *
 * @param fun - Function that accepts variadic arguments.
 * @returns A function that accepts an array of arguments and passes them to `fun`.
 *
 * @example
 * const add = (x, y) => x + y
 * const addArray = splat(add)
 * addArray([2, 3]) // 5
 */
export function splat<T, R>(fun: (...args: T[]) => R): (args: T[]) => R {
  return function(args: T[]) {
    return fun(...args);
  };
}