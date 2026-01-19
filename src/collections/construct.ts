/**
 * Constructs an array with `head` as first element and `tail` as the rest.
 *
 * @param head - First element.
 * @param tail - Array of remaining elements.
 * @returns New array `[head, ...tail]`.
 *
 * @example
 * construct(1, [2, 3, 4]) // [1, 2, 3, 4]
 */
export function construct<T>(head: T, tail: T[]): T[] {
  return [head, ...tail];
}