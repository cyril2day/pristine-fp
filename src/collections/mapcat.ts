import { cat } from './cat'

/**
 * Maps a function over a collection and concatenates all results.
 *
 * @param fun - Function that returns an array for each item.
 * @param coll - Collection to process.
 * @returns A single array containing all results concatenated.
 *
 * @example
 * mapcat((x) => [x, x * 2], [1, 2, 3]) // [1, 2, 2, 4, 3, 6]
 */
export function mapcat<T, U>(fun: (item: T) => U[], coll: T[]): U[] {
  return cat(...coll.map(fun));
}