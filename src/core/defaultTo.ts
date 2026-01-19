import { existy } from './existy'

/**
 * Returns `value` if it exists (neither `null` nor `undefined`), otherwise returns `defaultValue`.
 *
 * @param value - The value to check.
 * @param defaultValue - The fallback value.
 * @returns `value` if it exists, otherwise `defaultValue`.
 *
 * @example
 * defaultTo(undefined, 'fallback') // 'fallback'
 * defaultTo('actual', 'fallback')  // 'actual'
 */
export function defaultTo<T>(value: T | null | undefined, defaultValue: T): T {
  return existy(value) ? value as T : defaultValue
}

/**
 * Curried version of `defaultTo`.
 */
export function defaultToC<T>(value: T | null | undefined) {
  return function(defaultValue: T) {
    return defaultTo(value, defaultValue)
  }
}