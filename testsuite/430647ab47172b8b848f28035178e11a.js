load("201224b0d1c296b45befd2285e95dd42.js");

function bar() {
  foo.arguments.length = 10;
}

function foo(x) {
  var a = arguments;
  var n = 0;
  bar();
  assertEq(x, 5);
  assertEq(a.length, 1);
}

foo(5);
