/**
 * Returns a function that is the logical complement of the given predicate.
 *
 * @param pred - Predicate function.
 * @returns A function that returns `true` when `pred` returns `false`, and vice‑versa.
 *
 * @example
 * const isEven = (x) => x % 2 === 0
 * const isOdd = complement(isEven)
 * isOdd(3) // true
 */
export function complement<T>(pred: (x: T) => boolean): (x: T) => boolean {
  return function(x: T) {
    return !pred(x);
  };
}