/**
 * Returns an array of length `n` where each element is the result of calling `fn` with the index.
 *
 * @param n - Number of times to call `fn`.
 * @param fn - Function that receives the index and returns a value.
 * @returns Array of results. Returns empty array if `n ≤ 0`.
 *
 * @example
 * repeatedly(5, (i) => i * 2) // [0, 2, 4, 6, 8]
 * repeatedly(3, () => 'hello') // ['hello', 'hello', 'hello']
 */
export function repeatedly<T>(n: number, fn: (index: number) => T): T[] {
  return Array.from({ length: n }, (_, i) => fn(i));
}