import { existy } from '../core/existy'

/**
 * Returns a function that calls `fun` with arguments, replacing any `null` or `undefined` with the corresponding default value.
 *
 * @param fun - Function to protect.
 * @param defaults - Default values for each argument position. If a single default is provided, it is used for all missing arguments.
 * @returns A function that fills missing arguments with defaults.
 *
 * @example
 * const safeMult = fnull((x, y) => x * y, 1, 1)
 * safeMult(2, 3)   // 6
 * safeMult(null, 3) // 3
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fnull(fun: (...args: any[]) => any, ...defaults: any[]) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function(...args: any[]) {
    const filled = args.map((arg, i) => {
      if (existy(arg)) return arg;
      // choose default for position i
      if (defaults.length === 1) {
        return defaults[0];
      }
      // if defaults[i] exists
      if (i < defaults.length) {
        return defaults[i];
      }
      // fallback to last default (if any)
      if (defaults.length > 0) {
        return defaults[defaults.length - 1];
      }
      // no defaults at all (should not happen because defaults at least one? Actually could be zero)
      return undefined;
    });
    return fun(...filled);
  };
}