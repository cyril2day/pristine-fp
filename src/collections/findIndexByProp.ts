/**
 * Finds the index of an item in an array where a given property equals a target value.
 * Returns `-1` if not found.
 *
 * @param items - Array of items to search.
 * @param key - Property key to compare.
 * @param value - Target value for the property.
 * @returns The index of the matching item, or `-1`.
 */
export function findIndexByProp<T, K extends keyof T>(
  items: T[],
  key: K,
  value: T[K]
): number {
  return items.findIndex(item => item[key] === value)
}

/**
 * Curried version of `findIndexByProp`.
 */
export function findIndexByPropC<T, K extends keyof T>(items: T[]) {
  return function(key: K) {
    return function(value: T[K]) {
      return findIndexByProp(items, key, value)
    }
  }
}