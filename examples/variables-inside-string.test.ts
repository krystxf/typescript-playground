import { WrappedVariables } from "./variables-inside-string";
import { AssertEqual } from "../src/assert";

type _Tests = [
  // No variables
  AssertEqual<
    WrappedVariables<"This string doesn't contain any variables">,
    []
  >,
  AssertEqual<WrappedVariables<"">, []>,

  // i18next like syntax
  AssertEqual<
    WrappedVariables<"Hello, {{name}}! You have {{count}} new messages.">,
    ["name", "count"]
  >,
  AssertEqual<
    WrappedVariables<"Hello, {{ name }}! You have {{ count }} new messages.">,
    ["name", "count"]
  >,

  // JS like syntax
  AssertEqual<
    WrappedVariables<
      "Hello, ${name}! You have ${count} new messages.",
      {
        open: `\${${" " | ""}`;
        close: `${" " | ""}}`;
      }
    >,
    ["name", "count"]
  >,
  AssertEqual<
    WrappedVariables<
      "Hello, ${ name }! You have ${ count } new messages.",
      {
        open: `\${${" " | ""}`;
        close: `${" " | ""}}`;
      }
    >,
    ["name", "count"]
  >
];
