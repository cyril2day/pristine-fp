import { defaultTo } from '../core/defaultTo'
import { truthy, doWhen } from '../core'

/**
 * Creates a keyboard event handler from a map of key strings to actions.
 * Automatically calls `preventDefault` when an action is found.
 *
 * @param map - Object mapping key strings (or `event.key` / `event.code`) to action functions.
 * @param options - Configuration options (currently only `preventDefault`).
 * @returns A function that can be used as a keyboard event handler.
 */
export function createKeyHandler(
  map: Record<string, (event: KeyboardEvent) => void>,
  options = { preventDefault: true }
) {
  return (event: KeyboardEvent) => {
    const action = defaultTo(map[event.key], map[event.code])
    doWhen(truthy(action), () => {
      if (options.preventDefault) event.preventDefault()
      action!(event)
    })
  }
}