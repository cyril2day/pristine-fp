/**
 * Curried greater‑than check.
 *
 * @param a - The first number (threshold).
 * @returns A function that takes a second number and returns `true` if `a > b`.
 *
 * @example
 * gt(5)(3) // true (5 > 3)
 * gt(5)(7) // false
 */
export const gt = (a: number) => (b: number) => a > b

/**
 * Curried less‑than check.
 */
export const lt = (a: number) => (b: number) => a < b

/**
 * Curried greater‑than‑or‑equal check.
 */
export const gte = (a: number) => (b: number) => a >= b

/**
 * Curried less‑than‑or‑equal check.
 */
export const lte = (a: number) => (b: number) => a <= b