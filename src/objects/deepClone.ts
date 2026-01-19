import { existy } from '../core/existy'
import { isObject } from '../underscore'

/**
 * Deeply clones an object and all of its nested objects/arrays.
 *
 * @param obj - Value to clone.
 * @returns A deep clone of `obj`. Primitives are returned as‑is.
 *
 * @example
 * const obj = { a: { b: 2 } }
 * const cloned = deepClone(obj)
 * cloned.a.b === obj.a.b // true (same value)
 * cloned.a === obj.a     // false (different reference)
 */
export function deepClone<T>(obj: T): T {
  if (!existy(obj) || !isObject(obj)) return obj;

  // Handle built‑in object types that cannot be cloned via property iteration
  if (obj instanceof Date) {
    return new Date(obj) as T
  }
  if (obj instanceof RegExp) {
    // Preserve source and flags (lastIndex is not copied)
    return new RegExp(obj.source, obj.flags) as T
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const objAny = obj as any;
  const temp = new objAny.constructor();
  for (const key in objAny) {
    if (Object.prototype.hasOwnProperty.call(objAny, key)) {
      temp[key] = deepClone(objAny[key]);
    }
  }
  return temp;
}