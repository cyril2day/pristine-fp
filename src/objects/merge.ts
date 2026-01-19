/**
 * Immutable merge of objects. Returns a new object that is a shallow merge of all given objects.
 *
 * @param objects - Objects to merge.
 * @returns A new object containing all properties from the input objects, with later objects overriding earlier ones.
 *
 * @example
 * merge({ a: 1 }, { b: 2 }) // { a: 1, b: 2 }
 * merge({ a: 1 }, { a: 2 }) // { a: 2 }
 */
export function merge(...objects: Record<string, unknown>[]): Record<string, unknown> {
  return Object.assign({}, ...objects)
}