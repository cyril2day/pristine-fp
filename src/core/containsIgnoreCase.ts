/**
 * Curried case‑insensitive substring check (needle, haystack).
 *
 * @param needle - Substring to search for.
 * @returns A function that takes a haystack string and returns `true` if the needle appears in it ignoring case.
 *
 * @example
 * containsIgnoreCase('lo')('Hello') // true
 * const hasWorld = containsIgnoreCase('world')
 * hasWorld('Hello world') // true
 */
export function containsIgnoreCase(needle: string) {
  return function(haystack: string) {
    return haystack.toLowerCase().includes(needle.toLowerCase())
  }
}