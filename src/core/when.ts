/**
 * Executes `action` and returns its result when `cond` is `true`.
 * Otherwise returns `undefined`.
 *
 * @param cond - Boolean condition.
 * @param action - Function to execute if condition is `true`.
 * @returns The result of `action` or `undefined`.
 *
 * @example
 * when(true, () => 42) // 42
 * when(false, () => 42) // undefined
 */
export function when<T>(cond: boolean, action: () => T): T | undefined {
  return cond ? action() : undefined
}