/**
 * Exactly the same as {@linkcode Extract Extract<T, U>} but it returns `U` if `T` is `unknown`.
 *
 * @template T - The type to extract from.
 * @template U - The type to extract.
 *
 * @returns The extracted type.
 *
 * @example
 * ```ts
 * function isString<T>(value: T): value is SmartExtract<T, string> {
 *   return typeof value === "string";
 * }
 *
 * const value = ":)" as unknown; // `value` is `unknown`
 * if (isString(value)) {
 *   // `value` is `string`
 *   // Note: Without `SmartExtract`, `value` would be `never`
 * }
 * ```
 */
export type SmartExtract<T, U> = unknown extends T
  ? Extract<U, T>
  : Extract<T, U>;
