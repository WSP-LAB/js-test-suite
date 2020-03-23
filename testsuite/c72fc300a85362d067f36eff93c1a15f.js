load("201224b0d1c296b45befd2285e95dd42.js");
load("67a5ca41027013e2fab7554d08d412ca.js");

var JSMSG_ILLEGAL_CHARACTER = "illegal character";

var postfixes = [
  "@",
];

function check_syntax_error(e, code, name) {
  assertEq(e instanceof SyntaxError, true, name + ": " + code);
  assertEq(e.message, JSMSG_ILLEGAL_CHARACTER, name + ": " + code);
}

test_syntax(postfixes, check_syntax_error, false);
