load("201224b0d1c296b45befd2285e95dd42.js");
function foo(x) {
  x.a = 10;
  assertEq(x.a, 0);
}
x = {a:0,b:1};
Object.freeze(x);
foo(x);
