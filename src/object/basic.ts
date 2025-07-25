/**
 * A type representing a valid object key.
 */
export type DictKey = string | number | symbol;

/**
 * A type that accepts any valid object key and provides auto-completion
 *
 * @template Choices - The choices to suggest
 */
export type DictKeyChoices<Choices extends DictKey> =
  | Choices
  | (string & {})
  | (number & {})
  | (symbol & {});

/**
 * Similar to {@linkcode Record}
 */
export type Dict<K extends DictKey = string, V = unknown> = Record<K, V>;

/**
 * Similar to `keyof T` but returns all possible keys when T is a union
 *
 * @template T - The object type
 *
 * @returns All possible keys of the object
 *
 * @example
 * ```ts
 * type Input = { a: 1 } | { b: 2 };
 *
 * // keyof T
 * type R1 = keyof Input; // never
 *
 * // Keys<T>
 * type R2 = Keys<Input>; // "a" | "b"
 * ```
 */
export type Keys<T extends Dict> = T extends T ? keyof T : never;

/**
 * Similar to `T[keyof T]` but returns all possible values when T is a union
 *
 * @template T - The object type
 *
 * @returns All possible values of the object
 *
 * @example
 * ```ts
 * type Input = { a: 1 } | { b: 2 };
 *
 * // T[keyof T]
 * type R1 = Input[keyof Input]; // never
 *
 * // Values<T>
 * type R2 = Values<Input>; // 1 | 2
 * ```
 */
export type Values<T extends Dict> = T extends T ? T[keyof T] : never;

/**
 * Returns all possible entries of the object
 *
 * @template T - The object type
 *
 * @returns All possible entries of the object
 *
 * @example
 * ```ts
 * type Input = { a: 1 } | { b: 2 };
 *
 * // [keyof T, T[keyof T]][]
 * type R1 = [keyof Input, Input[keyof Input]][]; // [never, never][]
 *
 * // Entries<T>
 * type R2 = Entries<Input>; // ["a", 1][] | ["b", 2][]
 * ```
 */
export type Entries<T extends Dict> = T extends T
  ? [keyof T, T[keyof T]][]
  : never;

/**
 * Returns the value of the key in the object
 *
 * @template T - The object type
 * @template K - The key type
 *
 * @returns The value of the key in the object
 *
 * @example
 * ```ts
 * type Input = { a: 1 } | { b: 2 };
 *
 * // T[K]
 * type R1 = Input["a"]; // error // "a" isn't guaranteed to be a key of Input
 *
 * // Get<T, K>
 * type R2 = Get<Input, "a">; // 1
 * ```
 */
export type Get<T extends Dict, K extends Keys<T>> = T extends T
  ? K extends keyof T
    ? T[K]
    : never
  : never;

/**
 * Checks if the key is in the object
 *
 * @template T - The object type
 * @template K - The key type
 *
 * @returns True if the key is in the object, false otherwise
 *
 * @example
 * ```ts
 * type Input = { a: 1, b: 2 } | { b: 2 };
 *
 * // K extends keyof T
 * type R1 = "a" extends keyof Input; // error // "a" isn't guaranteed to be a key of Input
 *
 * // DictHas<T, K>
 * type R2 = ObjHas<Input, "a">; // boolean
 * type R3 = ObjHas<Input, "b">; // true
 * type R4 = ObjHas<Input, "c">; // false
 * ```
 */
export type ObjHas<T extends Dict, K extends Choices<Keys<T>>> = T extends T
  ? K extends keyof T
    ? true
    : false
  : never;
