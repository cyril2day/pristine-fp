import { every, has } from '../underscore'

/**
 * Returns a function that checks if an object has all the specified keys.
 *
 * @param keys - Keys to check for.
 * @returns A function that returns `true` if the object has all keys, otherwise `false`.
 *
 * @example
 * const hasAB = hasKeys('a', 'b')
 * hasAB({ a: 1, b: 2 }) // true
 * hasAB({ a: 1 }) // false
 */
export function hasKeys(...keys: string[]) {
  return function(obj: unknown): boolean {
    if (!obj || typeof obj !== 'object') return false;
    return every(keys, (key) => has(obj, key));
  };
}