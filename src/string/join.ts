export type Join<
  TArray extends string[],
  TSeparator extends string = ""
> = TArray extends []
  ? ""
  : TArray extends [infer F, ...infer R]
  ? R extends string[]
    ? `${F & string}${R["length"] extends 0 ? "" : TSeparator}${Join<
        R,
        TSeparator
      >}`
    : never
  : never;
