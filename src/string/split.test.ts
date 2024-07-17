import { Split } from "./";
import { AssertEqual } from "../assert";

type _Tests = [
  AssertEqual<Split<"a-b-c", "-">, ["a", "b", "c"]>,
  AssertEqual<
    Split<
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit. Vestibulum erat nulla ullamcorper nec rutrum non",
      " "
    >,
    [
      "Lorem",
      "ipsum",
      "dolor",
      "sit",
      "amet",
      "consectetuer",
      "adipiscing",
      "elit.",
      "Vestibulum",
      "erat",
      "nulla",
      "ullamcorper",
      "nec",
      "rutrum",
      "non"
    ]
  >
];
