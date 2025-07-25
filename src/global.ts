import * as type from ".";

declare global {
  /**
   * @see {@link type.DictKey DictKey}
   */
  type DictKey = type.DictKey;

  /**
   * @see {@link type.Dict Dict}
   */
  type Dict<K extends type.DictKey = string, V = unknown> = type.Dict<K, V>;

  /**
   * @see {@link type.Keys Keys}
   */
  type Keys<T extends Dict> = type.Keys<T>;

  /**
   * @see {@link type.Values Values}
   */
  type Values<T extends Dict> = type.Values<T>;

  /**
   * @see {@link type.Entries Entries}
   */
  type Entries<T extends Dict> = type.Entries<T>;

  /**
   * @see {@link type.Get Get}
   */
  type Get<T extends Dict, K extends Keys<T>> = type.Get<T, K>;

  /**
   * @see {@link type.MutableList MutableList}
   */
  type MutableList<T = unknown> = type.MutableList<T>;

  /**
   * @see {@link type.ReadonlyList ReadonlyList}
   */
  type ReadonlyList<T = unknown> = type.ReadonlyList<T>;

  /**
   * @see {@link type.List List}
   */
  type List<T = unknown> = type.List<T>;

  /**
   * @see {@link type.Valid Valid}
   */
  type Valid<T = any> = type.Valid<T>;

  /**
   * @see {@link type.Nullish Nullish}
   */
  type Nullish = type.Nullish;

  /**
   * @see {@link type.Maybe Maybe}
   */
  type Maybe<T> = type.Maybe<T>;

  /**
   * @see {@link type.MaybeUndefined MaybeUndefined}
   */
  type MaybeUndefined<T> = type.MaybeUndefined<T>;

  /**
   * @see {@link type.MaybeNull MaybeNull}
   */
  type MaybeNull<T> = type.MaybeNull<T>;

  /**
   * @see {@link type.Defined Defined}
   */
  type Defined<T> = type.Defined<T>;

  /**
   * @see {@link type.Prettify Prettify}
   */
  type Prettify<T> = type.Prettify<T>;

  /**
   * @see {@link type.PrettifyDeep PrettifyDeep}
   */
  type PrettifyDeep<T> = type.PrettifyDeep<T>;

  /**
   * @see {@link type.UpperFirst UpperFirst}
   */
  type UpperFirst<T extends string> = type.UpperFirst<T>;

  /**
   * @see {@link type.LowerFirst LowerFirst}
   */
  type LowerFirst<T extends string> = type.LowerFirst<T>;

  /**
   * @see {@link type.Stringable Stringable}
   */
  type Stringable = type.Stringable;

  /**
   * @see {@link type.Stringify Stringify}
   */
  type Stringify<T extends Stringable> = type.Stringify<T>;

  /**
   * @see {@link type.StringChoices StringChoices}
   */
  type StringChoices<Choices extends string> = type.StringChoices<Choices>;
  /**
   * @see {@link type.NumberChoices NumberChoices}
   */
  type NumberChoices<Choices extends number> = type.NumberChoices<Choices>;
  /**
   * @see {@link type.Choices Choices}
   */
  type Choices<Choices> = type.Choices<Choices>;

  /**
   * @see {@link type.Func Func}
   */
  type Func<Args extends any[] = [], Return = any> = type.Func<Args, Return>;

  /**
   * @see {@link type.AsyncFunc AsyncFunc}
   */
  type AsyncFunc<Args extends any[] = [], Return = any> = type.AsyncFunc<
    Args,
    Return
  >;
}
