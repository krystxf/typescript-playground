/**
 * This is inspired by [i18next interpolation](https://www.i18next.com/translation-function/interpolation)
 *
 * In this case variables can be part of the string wrapped in special string.
 * Example:
 * "Hello, {{name}}! You have {{count}} new messages." - in this case variables are `name` and `count`
 */

export type WrappedVariables<
  TString extends string,
  TWrapperSyntax extends { open: string; close: string } = {
    open: `{{${" " | ""}`;
    close: `${" " | ""}}}`;
  }
> = TString extends `${infer _Start}${TWrapperSyntax["open"]}${infer Value}${TWrapperSyntax["close"]}${infer Rest}`
  ? [Value, ...WrappedVariables<Rest, TWrapperSyntax>]
  : [];
