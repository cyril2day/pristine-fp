import { truthy } from './truthy'

/**
 * If `cond` is truthy, call `action` and return its result.
 * Otherwise return `undefined`.
 *
 * @param cond - Condition to evaluate.
 * @param action - Function to execute if condition is truthy.
 * @returns The result of `action` or `undefined`.
 *
 * @example
 * doWhen(true, () => 42) // 42
 * doWhen(false, () => 42) // undefined
 * doWhen('hello', () => 'world') // 'world'
 *
 * @see “Functional JavaScript” – Chapter 1, “A Taste of Functional JavaScript”
 */
export function doWhen<T>(cond: unknown, action: () => T): T | undefined {
  if (truthy(cond)) {
    return action()
  }
  return undefined
}