/**
 * Returns a function that invokes a method on an object.
 * If the object does not have the method, returns undefined.
 *
 * @param methodName - Name of the method to invoke.
 * @returns A function that takes a target and optional arguments, and calls the method.
 *
 * @example
 * const greetInvoker = invoker('greet')
 * const obj = { greet: (name) => `Hello ${name}` }
 * greetInvoker(obj, 'World') // 'Hello World'
 */
export function invoker(methodName: string) {
  return function(target: unknown, ...args: unknown[]) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (target && typeof (target as any)[methodName] === 'function') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (target as any)[methodName].apply(target, args);
    }
    return undefined;
  };
}