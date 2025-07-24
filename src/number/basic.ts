/**
 * A type that accepts any number and provides auto-completion.
 *
 * @template Choices - The choices to suggest
 *
 * @returns A type that accepts any number and provides auto-completion.
 *
 * @example
 * ```ts
 * type Direction = NumberChoices<-1 | 0 | 1>;
 *
 * const r1: Direction = -1; // With auto-completion
 * const r2: Direction = 2; // No errors
 * ```
 */
export type NumberChoices<Choices extends number> = Choices | (number & {});
