/**
 * Returns a checker function that runs multiple validators and returns the first error.
 *
 * @param validators - Validator functions.
 * @returns A function that returns the first error message, or `undefined` if all validators pass.
 *
 * @example
 * const isEven = (x) => x % 2 === 0
 * const isPositive = (x) => x > 0
 * const validateEven = validator(isEven, 'not even')
 * const validatePositive = validator(isPositive, 'not positive')
 * const check = checker(validateEven, validatePositive)
 * check(3) // 'not even'
 * check(-2) // 'not positive'
 * check(4) // undefined
 */
export function checker<T = unknown>(...validators: ((x: T) => string | undefined)[]) {
  return function(x: T): string | undefined {
    for (const validator of validators) {
      const error = validator(x);
      if (error) return error;
    }
    return undefined;
  };
}