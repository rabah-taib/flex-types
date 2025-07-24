/**
 * Negate a boolean value
 *
 * @template T - The boolean value to negate
 *
 * @example
 * ```ts
 * type R1 = Negate<true> // false
 * type R2 = Negate<false> // true
 * ```
 */
export type Negate<T extends boolean> = T extends true ? false : true;
