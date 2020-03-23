load("201224b0d1c296b45befd2285e95dd42.js");
what = 0;

function f(x) {
  g(x);
}

function g(x) {
  eval("what = true");
}

f(10);
assertEq(what, true);
