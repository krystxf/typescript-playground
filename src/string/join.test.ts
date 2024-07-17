import { Join } from "./";
import { AssertEqual } from "../assert";

type _Tests = [
  AssertEqual<
    Join<
      [
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vestibulum erat nulla, ullamcorper nec, rutrum non,"
      ],
      "-"
    >,
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vestibulum erat nulla, ullamcorper nec, rutrum non,"
  >,
  AssertEqual<Join<["a"], ",">, "a">,
  AssertEqual<Join<["a", "b", "c"]>, "abc">,
  AssertEqual<Join<["a", "b", "c"], ",">, "a,b,c">,
  AssertEqual<Join<["a", "b", "c"], " ">, "a b c">,
  AssertEqual<
    Join<["Lorem", "Ipsum", "Dolor", "Sit", "Amet"], " ">,
    "Lorem Ipsum Dolor Sit Amet"
  >
];
