/**
 * Get the first character of a string
 *
 * @template Input - The string to get the first character of
 *
 * @returns The first character of the string
 *
 * @example
 * ```ts
 * type R1 = GetFirst<"nice"> // "n"
 * type R2 = GetFirst<""> // ""
 * type R3 = GetFirst<true> // "t"
 * type R4 = GetFirst<123> // "1"
 * ```
 */
export type GetFirst<Input extends Stringable> =
  Stringify<Input> extends `${infer First extends string}${string}`
    ? First
    : "";

/**
 * Get the first character of a string in uppercase
 *
 * @template Input - The string to get the first character of
 *
 * @returns The first character of the string in uppercase
 *
 * @example
 * ```ts
 * type R1 = GetFirstUppered<"nice"> // "N"
 * type R2 = GetFirstUppered<""> // ""
 * type R3 = GetFirstUppered<true> // "T"
 * type R4 = GetFirstUppered<123> // "1"
 * ```
 */
export type GetFirstUppered<Input extends string> = UpperFirst<GetFirst<Input>>;

/**
 * Get the first character of a string in lowercase
 *
 * @template Input - The string to get the first character of
 *
 * @returns The first character of the string in lowercase
 *
 * @example
 * ```ts
 * type R1 = GetFirstLowered<"NICE"> // "n"
 * type R2 = GetFirstLowered<""> // ""
 * type R3 = GetFirstLowered<true> // "t"
 * type R4 = GetFirstLowered<123> // "1"
 * ```
 */
export type GetFirstLowered<Input extends string> = LowerFirst<GetFirst<Input>>;
