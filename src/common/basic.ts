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

export type Inferable = undefined | null | {};

/**
 * A type that accepts any value and provides auto-completion.
 *
 * @template Choices - The choices to suggest
 *
 * @example
 * ```ts
 * type Fruit = Choices<"apple" | { a: 1 }>;
 *
 * const f1: Fruit = { a: 1 }; // With auto-completion
 * const f2: Fruit = "apple"; // With auto-completion
 *
 * const f3: Fruit = 2; // No errors
 * const f4: Fruit = null; // No errors
 * ```
 */
export type Choices<Choices> = Choices | Inferable;

/**
 * A type representing a mutable list
 *
 * @template T - Elements' type
 */
export type MutableList<T = unknown> = T[];

/**
 * A type representing a readonly list
 *
 * @template T - Elements' type
 */
export type ReadonlyList<T = unknown> = readonly T[];

/**
 * A type representing a list (mutable or readonly)
 *
 * @template T - Elements' type
 */
export type List<T = unknown> = MutableList<T> | ReadonlyList<T>;

/**
 * To use instead of `any` for readability
 *
 * @template T - A type to use instead of `any`
 *
 * @example
 * ```ts
 * function lowerFirst<T extends string>(value: T): LowerFirst<T> {
 *   return (value.charAt(0).toLowerCase() + value.slice(1)) as Valid;
 * }
 * ```
 */
export type Valid<T = any> = T;

/**
 * A type representing a nullish value
 */
export type Nullish = null | undefined;

/**
 * A type representing a value that can be `null` or `undefined`
 */
export type Maybe<T> = T | Nullish;

/**
 * A type representing a value that can be `undefined`
 */
export type MaybeUndefined<T> = T | undefined;

/**
 * A type representing a value that can be null
 */
export type MaybeNull<T> = T | null;

/**
 * A type representing a value that is not `null` or `undefined`
 *
 * @template T - The type to exclude nullish values from
 */
export type Defined<T> = Exclude<T, Nullish>;

/**
 * Prettify a type
 *
 * @template T - The type to prettify
 *
 * @example
 * ```ts
 * type Input = Readonly<{ a: 1 }> & Readonly<{ b: 2 }>
 *
 * type Prettified = Prettify<Input>
 * // { readonly a: 1; readonly b: 2 }
 * ```
 */
export type Prettify<T> = {
  [Key in keyof T]: T[Key];
} & {};

/**
 * Prettify a type deeply
 *
 * @template T - The type to prettify
 *
 * @example
 * ```ts
 * type Input = Readonly<{ a: 1 }> & Readonly<{ b: Readonly<{ c: 4 }> }>;
 *
 * type Prettified = Prettify<Input>;
 * // { readonly a: 1; readonly b: Readonly<{ c: 4 }> }
 *
 * type PrettifiedDeep = PrettifyDeep<Input>;
 * // { readonly a: 1; readonly b: { readonly c: 4 } };
 * ```
 */
export type PrettifyDeep<T> = {
  [Key in keyof T]: T[Key] extends Dict | List ? PrettifyDeep<T[Key]> : T[Key];
} & {};
