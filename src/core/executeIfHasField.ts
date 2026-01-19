import { doWhen } from './doWhen'
import { result } from '../underscore'

/**
 * If `target[name]` exists, returns `_.result(target, name)` and logs the result.
 * Otherwise returns `undefined`.
 *
 * @param target - Object to inspect.
 * @param name - Property or method name.
 * @returns The result of the property/method, or `undefined`.
 *
 * @example
 * const obj = { greet: 'Hello' }
 * executeIfHasField(obj, 'greet') // logs “The result is Hello” → returns “Hello”
 *
 * @see “Functional JavaScript” – Chapter 1, “A Taste of Functional JavaScript”
 * @see underscore result
 */
export function executeIfHasField(target: unknown, name: string): unknown {
  return doWhen((target as Record<string, unknown>)?.[name] != null, () => {
    const res = result(target, name)
    console.log(`The result is ${res}`)
    return res
  })
}