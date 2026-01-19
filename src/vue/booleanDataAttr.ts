import { truthy } from '../core/truthy'

/**
 * Returns `value` when `cond` is truthy, otherwise `undefined`.
 * Useful for boolean‑style data attributes where the attribute should be present with a specific value.
 *
 * @param cond - Condition to evaluate.
 * @param value - The value to return when `cond` is truthy.
 * @returns `value` or `undefined`.
 *
 * @example
 * booleanDataAttr(isOpen, 'expanded') // 'expanded' or undefined
 */
export function booleanDataAttr(cond: boolean, value: string): string | undefined {
  return truthy(cond) ? value : undefined
}

/**
 * Curried version of `booleanDataAttr`.
 */
export function booleanDataAttrC(cond: boolean) {
  return function(value: string) {
    return booleanDataAttr(cond, value)
  }
}