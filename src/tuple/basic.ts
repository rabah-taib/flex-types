type _Tuple<
  Length extends number,
  Element extends unknown,
  _Count extends List<any> = [any],
> = _Count["length"] extends Length
  ? [Element]
  : [Element, ..._Tuple<Length, Element, [..._Count, any]>];

/**
 * Creates a tuple of the given length and type
 *
 * @template Length - The length of the tuple
 * @template Element - The type of the elements in the tuple
 *
 * @returns A tuple of the given length and type
 *
 * @example
 * ```ts
 * type R1 = Tuple<2, string>; // [string, string]
 * ```
 */

export type Tuple<
  Length extends number,
  Element extends unknown = unknown,
> = number extends Length ? Element[] : _Tuple<Length, Element>;
