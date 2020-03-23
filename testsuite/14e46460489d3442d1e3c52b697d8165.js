load("201224b0d1c296b45befd2285e95dd42.js");
load("67a5ca41027013e2fab7554d08d412ca.js");

var postfixes = [
  "yield, @",
  "yield; @",
];

function check_syntax_error(e, code) {
  // No need to check exception type
}

test_syntax(postfixes, check_syntax_error, true);
