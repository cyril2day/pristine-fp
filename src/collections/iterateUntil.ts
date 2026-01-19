/**
 * Repeatedly applies `transform` to `seed`, collecting results in an array until `predicate` returns true.
 * The predicate is tested *before* including the next value (i.e., the seed is included only if predicate is false).
 * Returns the array of collected values (including the seed if predicate never becomes true).
 *
 * @param predicate - Function that returns `true` when iteration should stop.
 * @param transform - Function that produces the next value from the current one.
 * @param seed - Initial value.
 * @returns Array of values generated before the predicate became true.
 *
 * @example
 * iterateUntil((x) => x >= 5, (x) => x + 1, 1) // [1, 2, 3, 4]
 */
export function iterateUntil<T>(
  predicate: (val: T) => boolean,
  transform: (val: T) => T,
  seed: T
): T[] {
  const result: T[] = [];
  let current = seed;
  while (!predicate(current)) {
    result.push(current);
    current = transform(current);
  }
  return result;
}