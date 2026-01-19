/**
 * Returns a validator function that returns an error message if predicate fails.
 *
 * @param predicate - Function that returns `true` for valid input.
 * @param message - Error message to return when predicate fails.
 * @returns A validator function that returns `undefined` if valid, otherwise the error message.
 *
 * @example
 * const isEven = (x) => x % 2 === 0
 * const validateEven = validator(isEven, 'must be even')
 * validateEven(2) // undefined
 * validateEven(3) // 'must be even'
 */
export function validator<T = unknown>(predicate: (x: T) => boolean, message: string) {
  function validate(x: T): string | undefined {
    return predicate(x) ? undefined : message;
  }
  (validate as unknown as { message: string }).message = message;
  return validate;
}