declare global {
  /**
   * A type representing an object key
   */
  type DictKey = string | number | symbol;

  /**
   * Similar to {@linkcode Record}
   */
  type Dict<K extends DictKey = string, V = unknown> = Record<K, V>;

  /**
   * A type representing a mutable list
   *
   * @template T - Elements' type
   */
  type MutableList<T = unknown> = T[];

  /**
   * A type representing a readonly list
   *
   * @template T - Elements' type
   */
  type ReadonlyList<T = unknown> = readonly T[];

  /**
   * A type representing a list (mutable or readonly)
   *
   * @template T - Elements' type
   */
  type List<T = unknown> = MutableList<T> | ReadonlyList<T>;

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
  type Valid<T = any> = T;

  /**
   * A type representing a nullish value
   */
  type Nullish = null | undefined;
  
  /**
   * A type representing a value that can be `null` or `undefined`
   */
  type Maybe<T> = T | Nullish;

  /**
   * A type representing a value that can be `undefined`
   */
  type MaybeUndefined<T> = T | undefined;

  /**
   * A type representing a value that can be null
   */
  type MaybeNull<T> = T | null;

  /**
   * A type representing a value that is not `null` or `undefined`
   *
   * @template T - The type to exclude nullish values from
   */
  type Defined<T> = Exclude<T, Nullish>;

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
  type Prettify<T> = {
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
  type PrettifyDeep<T> = {
    [Key in keyof T]: T[Key] extends Dict | List
      ? PrettifyDeep<T[Key]>
      : T[Key];
  } & {};
}

