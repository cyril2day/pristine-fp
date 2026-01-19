import { existy } from '../core/existy'
import { isObject } from '../underscore'

/**
 * Deeply freezes an object and all of its nested objects/arrays.
 *
 * @param obj - Value to freeze.
 * @returns The same `obj`, now frozen. Primitives are returned as‑is.
 *
 * @example
 * const obj = { a: { b: 2 } }
 * const frozen = deepFreeze(obj)
 * Object.isFrozen(frozen)     // true
 * Object.isFrozen(frozen.a)   // true
 */
export function deepFreeze<T>(obj: T): T {
  if (!existy(obj) || !isObject(obj)) return obj;
  Object.freeze(obj);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const objAny = obj as any;
  for (const key in objAny) {
    if (Object.prototype.hasOwnProperty.call(objAny, key)) {
      deepFreeze(objAny[key]);
    }
  }
  return obj;
}