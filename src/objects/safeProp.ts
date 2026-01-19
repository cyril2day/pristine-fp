import { existy } from '../core/existy'

/**
 * Safely retrieves a property from an object, returning `undefined` if the object or property does not exist.
 * Optionally provides a default fallback value.
 *
 * @param obj - The object to inspect (may be `null` or `undefined`).
 * @param prop - The property key to retrieve.
 * @param defaultValue - Optional default value returned when the property is missing or the object is `null`/`undefined`.
 * @returns The property value, `defaultValue`, or `undefined`.
 *
 * @example
 * safeProp({ foo: 'bar' }, 'foo') // 'bar'
 * safeProp(null, 'foo') // undefined
 * safeProp({}, 'foo', 'default') // 'default'
 */
export function safeProp<T extends object, K extends keyof T, D = undefined>(
  obj: T | null | undefined,
  prop: K,
  defaultValue?: D
): T[K] | D {
  if (!existy(obj)) return defaultValue as D
  const target = obj as T
  if (!(prop in target)) return defaultValue as D
  return target[prop]
}

/**
 * Curried version of `safeProp`.
 */
export function safePropC<T extends object, K extends keyof T, D = undefined>(obj: T | null | undefined) {
  return function(prop: K) {
    return function(defaultValue?: D) {
      return safeProp(obj, prop, defaultValue)
    }
  }
}