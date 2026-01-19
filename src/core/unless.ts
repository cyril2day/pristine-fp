/**
 * Executes `action` and returns its result when `cond` is `false`.
 * Otherwise returns `undefined`.
 *
 * @param cond - Boolean condition.
 * @param action - Function to execute if condition is `false`.
 * @returns The result of `action` or `undefined`.
 *
 * @example
 * unless(false, () => 42) // 42
 * unless(true, () => 42) // undefined
 */
export function unless<T>(cond: boolean, action: () => T): T | undefined {
  return !cond ? action() : undefined
}