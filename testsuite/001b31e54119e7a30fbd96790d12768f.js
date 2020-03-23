load("201224b0d1c296b45befd2285e95dd42.js");
function f(a) {
  Object.freeze(arguments);
  a = 1;
  return arguments[0];
}

assertEq(f(10), 10);
assertEq(f("hello"), "hello");
