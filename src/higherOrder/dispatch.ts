import { existy } from '../core/existy'
import { construct } from '../collections/construct'

/**
 * Returns a function that tries each given function in order until one returns an existy value.
 *
 * @param funs - Functions to try.
 * @returns A function that calls each function with the same arguments and returns the first non‑null/undefined result.
 *
 * @example
 * const first = dispatch(
 *   (x) => x > 0 ? 'positive' : undefined,
 *   (x) => x < 0 ? 'negative' : undefined,
 *   () => 'zero'
 * )
 * first(5)  // 'positive'
 * first(-2) // 'negative'
 * first(0)  // 'zero'
 */
export function dispatch(...funs: ((...args: unknown[]) => unknown)[]): (...args: unknown[]) => unknown {
  return function(target: unknown, ...args: unknown[]) {
    for (const fun of funs) {
      const result = fun.apply(fun, construct(target, args));
      if (existy(result)) return result;
    }
    return undefined;
  };
}