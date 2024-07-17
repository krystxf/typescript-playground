import { AssertEqual } from "./assert-equal";

type _Tests = [
  AssertEqual<number, number>,
  AssertEqual<[10, 11, 12], [10, 11, 12]>,
  AssertEqual<string | number, string | number>
];
