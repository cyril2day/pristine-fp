import { reduce } from '../underscore'

/**
 * Returns the "best" element in a collection according to a value function and a comparison function.
 *
 * @param valueFun - Function that extracts a comparable value from an element.
 * @param bestFun - Function that takes two values and returns the "better" one (e.g., `Math.max`).
 * @param coll - Collection to search.
 * @returns The element deemed "best", or `undefined` if the collection is empty.
 *
 * @example
 * finder((x) => x, Math.max, [1, 5, 3, 9, 2]) // 9
 * finder((p) => p.age, Math.max, people) // person with highest age
 */
export function finder<T, V>(
  valueFun: (item: T) => V,
  bestFun: (a: V, b: V) => V,
  coll: T[]
): T | undefined {
  if (coll.length === 0) return undefined;
  return reduce(coll, function(best, current) {
    const bestValue = valueFun(best);
    const currentValue = valueFun(current);
    return (bestValue === bestFun(bestValue, currentValue)) ? best : current;
  });
}