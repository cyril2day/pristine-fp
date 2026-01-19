import { complement } from '../higherOrder'
import { isEmpty } from 'underscore'

/**
 * Checks whether an array (or array‑like object) is not empty.
 * Complement of `isEmpty`.
 *
 * @param collection - The collection to test.
 * @returns `true` if the collection has at least one element, otherwise `false`.
 *
 * @example
 * isNotEmpty([1, 2, 3]) // true
 * isNotEmpty([])        // false
 * isNotEmpty({ length: 0 }) // false
 */
export const isNotEmpty = complement(isEmpty)