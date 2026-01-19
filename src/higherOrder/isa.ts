/**
 * Creates a function that checks if an object's `type` property matches the given type string.
 * If it matches, calls the action function with the object; otherwise returns undefined.
 *
 * @param type - Expected type string.
 * @param action - Function to execute when the type matches.
 * @returns A function that conditionally applies `action`.
 *
 * @example
 * const handleError = isa('error', (err) => console.error(err.message))
 * handleError({ type: 'error', message: 'Oops' }) // logs “Oops”
 * handleError({ type: 'info' }) // undefined
 */
export function isa<T extends { type: string }, R>(
  type: string,
  action: (obj: T) => R
): (obj: T) => R | undefined {
  return function(obj: T) {
    if (obj.type === type) {
      return action(obj);
    }
    return undefined;
  };
}