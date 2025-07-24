/**
 * A type representing a function
 *
 * @template Args - The arguments of the function
 * @template Return - The return type of the function
 *
 * @returns A type representing a function
 *
 * @example
 * ```ts
 * function doSomething(callback: Func<[number], void>) {
 *   callback(123);
 * }
 * ```
 */
export type Func<Args extends any[] = [], Return = any> = (
  ...args: Args
) => Return;

/**
 * A type representing an asynchronous function
 *
 * @template Args - The arguments of the function
 * @template Return - The return type of the function
 *
 * @returns A type representing an asynchronous function
 *
 * @example
 * ```ts
 * async function doSomething(callback: AsyncFunc<[number], void>) {
 *   await callback(123);
 * }
 * ```
 */
export type AsyncFunc<Args extends any[] = [], Return = any> = (
  ...args: Args
) => Promise<Return>;
