type Assert<TValue, TExpected> = TValue extends TExpected ? true : false;

export type AssertEqual<TActual, TExpected extends TActual> = Assert<
  TExpected,
  TActual
>;
