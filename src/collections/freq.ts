import { curry2 } from '../higherOrder/curry2'
import { countBy, identity } from '../underscore'

/**
 * Frequency counter. Returns an object mapping each element in a collection to its count.
 * Curried version of `countBy` with `identity` as the key function.
 *
 * @param coll - Collection to count.
 * @returns Object with element counts.
 *
 * @example
 * freq([1, 2, 2, 3, 3, 3]) // { '1': 1, '2': 2, '3': 3 }
 * freq(['a', 'b', 'a'])    // { a: 2, b: 1 }
 */
export const freq = curry2(countBy)(identity)