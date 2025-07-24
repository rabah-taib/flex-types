//?-------------
//? Prefix
//?-------------

/**
 * Check if a string is prefixed with a given prefix
 *
 * @template Input - The string to check
 * @template Prefix - The prefix to check for
 *
 * @returns `true` if the string is prefixed with the given prefix, `false` otherwise
 *
 * @example
 * ```ts
 * type R1 = IsPrefixed<"nice", "n"> // true
 * type R2 = IsPrefixed<"nice", "o"> // false
 * ```
 */
export type IsPrefixed<Input extends Stringable, Prefix extends Stringable> =
  Stringify<Input> extends `${Prefix}${string}` ? true : false;

/**
 * Add a prefix to a string
 *
 * @template Input - The string to add the prefix to
 * @template Prefix - The prefix to add
 *
 * @returns The string with the prefix added
 *
 * @example
 * ```ts
 * type R1 = Prefix<"ice", "n"> // "nice"
 * type R2 = Prefix<")", ":"> // ":)"
 * ```
 */
export type Prefix<
  Input extends Stringable,
  Prefix extends Stringable,
> = `${Prefix}${Input}`;

/**
 * Add a prefix to a string if it is not already prefixed with it
 *
 * @template Input - The string to add the prefix to
 * @template TPrefix - The prefix to ensure
 *
 * @returns The string with the prefix ensured
 *
 * @example
 * ```ts
 * type R1 = EnsurePrefix<"ice", "n"> // "nice"
 * type R2 = EnsurePrefix<"nice", "n"> // "nice"
 * ```
 */
export type EnsurePrefix<Input extends Stringable, TPrefix extends Stringable> =
  IsPrefixed<Input, TPrefix> extends true ? Input : Prefix<Input, TPrefix>;

/**
 * Remove a prefix from a string
 *
 * @template Input - The string to remove the prefix from
 * @template Prefix - The prefix to remove
 *
 * @returns The string with the prefix removed
 *
 * @example
 * ```ts
 * type R1 = UnPrefix<"nice", "n"> // "ice"
 * type R2 = UnPrefix<"ice", "n"> // "ice"
 * ```
 */
export type UnPrefix<Input extends Stringable, Prefix extends Stringable> =
  Stringify<Input> extends `${Prefix}${infer Rest extends string}`
    ? Rest
    : Input;

//?-------------
//? Suffix
//?-------------

/**
 * Check if a string is suffixed with a given suffix
 *
 * @template Input - The string to check
 * @template Suffix - The suffix to check for
 *
 * @returns `true` if the string is suffixed with the given suffix, `false` otherwise
 *
 * @example
 * ```ts
 * type R1 = IsSuffixed<"nice", "ice"> // true
 * type R2 = IsSuffixed<"nice", "ice"> // false
 * ```
 */
export type IsSuffixed<Input extends Stringable, Suffix extends Stringable> =
  Stringify<Input> extends `${string}${Suffix}` ? true : false;

/**
 * Add a suffix to a string
 *
 * @template Input - The string to add the suffix to
 * @template Suffix - The suffix to add
 *
 * @returns The string with the suffix added
 *
 * @example
 * ```ts
 * type R1 = Suffix<"n", "ice"> // "nice"
 * type R2 = Suffix<":", ")"> // ":)"
 * ```
 */
export type Suffix<
  Input extends Stringable,
  Suffix extends Stringable,
> = `${Input}${Suffix}`;

/**
 * Add a suffix to a string if it is not already suffixed with it
 *
 * @template Input - The string to add the suffix to
 * @template TSuffix - The suffix to ensure
 *
 * @returns The string with the suffix ensured
 *
 * @example
 * ```ts
 * type R1 = EnsureSuffix<"n", "ice"> // "nice"
 * type R2 = EnsureSuffix<"nice", "ice"> // "nice"
 * ```
 */
export type EnsureSuffix<Input extends Stringable, TSuffix extends Stringable> =
  IsSuffixed<Input, TSuffix> extends true ? Input : Suffix<Input, TSuffix>;

/**
 * Remove a suffix from a string
 *
 * @template Input - The string to remove the suffix from
 * @template Suffix - The suffix to remove
 *
 * @returns The string with the suffix removed
 *
 * @example
 * ```ts
 * type R1 = UnSuffix<"nice", "ice"> // "n"
 * type R2 = UnSuffix<"nice", "z"> // "nice"
 * ```
 */
export type UnSuffix<Input extends Stringable, Suffix extends Stringable> =
  Stringify<Input> extends `${infer Rest extends string}${Suffix}`
    ? Rest
    : Input;
