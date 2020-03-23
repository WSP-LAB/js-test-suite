load("201224b0d1c296b45befd2285e95dd42.js");
load("67a5ca41027013e2fab7554d08d412ca.js");

var postfixes = [
  "...foo) => 1 @",
];

function check_syntax_error(e, code) {
  assertEq(e instanceof SyntaxError, true);
}

test_syntax(postfixes, check_syntax_error, true);
