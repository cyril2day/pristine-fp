import { truthy, doWhen } from '../core'

/**
 * Returns an empty string if `cond` is truthy, otherwise `undefined`.
 * Useful for boolean‑style data attributes where the attribute should be present
 * when the condition is true and omitted when false.
 *
 * @example
 * :data-expanded="presenceAttr(isOpen)"
 */
export function presenceAttr(cond: boolean): '' | undefined {
  return doWhen(truthy(cond), () => '') ?? undefined
}