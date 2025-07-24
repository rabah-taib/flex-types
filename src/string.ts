/**
 * Alias of {@linkcode Capitalize}
 */
export type UpperFirst<T extends string> = Capitalize<T>;

/**
 * Alias of {@linkcode Uncapitalize}
 */
export type LowerFirst<T extends string> = Uncapitalize<T>;

/**
 * Get the first character of a string
 */
export type GetFirstChar<T extends string> = T extends `${infer First}${string}`
  ? First
  : never;

/**
 * Get the first character of a string in uppercase
 */
export type GetFirstCharUppered<T extends string> = UpperFirst<GetFirstChar<T>>;

/**
 * Get the first character of a string in lowercase
 */
export type GetFirstCharLowercased<T extends string> = LowerFirst<GetFirstChar<T>>;
