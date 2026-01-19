import { reduce } from '../underscore'

/**
 * Returns the element in a collection that is "best" according to a comparator function.
 *
 * @param fun - Comparator that returns `true` if the first argument is better than the second.
 * @param coll - Collection to search.
 * @returns The best element, or `undefined` if the collection is empty.
 *
 * @example
 * best((a, b) => a > b, [1, 5, 3, 9, 2]) // 9
 * best((a, b) => a.age > b.age, people) // person with highest age
 */
export function best<T>(
  fun: (a: T, b: T) => boolean,
  coll: T[]
): T | undefined {
  if (coll.length === 0) return undefined;
  return reduce(coll, (x, y) => fun(x, y) ? x : y);
}