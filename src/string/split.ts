export type Split<
  TValue extends string,
  TSeparator extends string = ""
> = TValue extends `${infer L}${TSeparator}${infer R}`
  ? [L, ...Split<R, TSeparator>]
  : [TValue];
