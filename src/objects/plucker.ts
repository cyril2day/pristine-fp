/**
 * Returns a function that extracts a property from an object.
 *
 * @param key - Property name to extract.
 * @returns A function that, given an object, returns the value of `key` or `undefined`.
 *
 * @example
 * const getFoo = plucker('foo')
 * getFoo({ foo: 'bar' }) // 'bar'
 * getFoo({}) // undefined
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function plucker(key: string): (obj: any) => any {
  return function(obj) {
    if (obj && typeof obj === 'object' && key in obj) {
      return obj[key];
    }
    return undefined;
  };
}