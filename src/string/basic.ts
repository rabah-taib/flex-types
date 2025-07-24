/**
 * Convert a {@link Stringable} to a string
 *
 * @template T - The value to convert to a string
 *
 * @returns The string representation of the value
 *
 * @example
 * ```ts
 * type R1 = Stringify<"nice"> // "nice"
 * type R2 = Stringify<123> // "123"
 * type R3 = Stringify<true> // "true"
 * ```
 */
export type Stringify<T extends Stringable> = `${T}`;

/**
 * A type that accepts any string and provides auto-completion.
 *
 * @template Choices - The choices to suggest
 *
 * @example
 * ```ts
 * type Fruit = StringChoices<"apple" | "banana" | "cherry">;
 *
 * const f1: Fruit = "apple"; // With auto-completion
 * const f2: Fruit = "orange"; // No errors
 * ```
 */
export type StringChoices<Choices extends string> = Choices | (string & {});
