load("201224b0d1c296b45befd2285e95dd42.js");
function foo(x) {
  x.c = 10;
  assertEq(x.c, undefined);
}
x = {a:0,b:1};
Object.freeze(x);
foo(x);
