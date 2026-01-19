/**
 * Returns an object suitable for Vue's `:class` binding that conditionally applies a single class.
 *
 * @example
 * :class="classIf(isActive, 'active')"
 */
export function classIf(condition: boolean, className: string): Record<string, boolean> {
  return { [className]: condition }
}