/**
 * A type representing a value that can be converted to a string
 */
export type Stringable = string | number | bigint | boolean | null | undefined;

/**
 * Exactly the same as {@linkcode Extract Extract<T, U>} but it returns `U` if `T` is `unknown` and it allows extracting literals from `T`.
 *
 * @template T - The type to extract from.
 * @template U - The type to extract.
 *
 * @returns The extracted type.
 *
 * @example
 * ```ts
 * // Basic usage
 * type R1 = SmartExtract<unknown, string> // string
 * type R2 = SmartExtract<string, ""> // ""
 * type R3 = SmartExtract<string | number, "" | 0> // "" | 0
 *
 * // Usage with functions
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
  : U extends T
    ? U
    : never;
