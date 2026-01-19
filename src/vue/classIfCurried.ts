/**
 * Curried version of `classIf`. Useful for composition.
 *
 * @example
 * :class="classIfCurried('active')(isActive)"
 */
export function classIfCurried(className: string): (condition: boolean) => Record<string, boolean> {
  return (condition) => ({ [className]: condition })
}