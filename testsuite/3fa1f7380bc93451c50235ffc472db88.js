load("201224b0d1c296b45befd2285e95dd42.js");

/* Recovering non-reentrant information on singletons after a GC. */

function foo(a) {
  return function() {
    gc();
    var n = 0;
    for (var i = 0; i < 20; i++)
      n = a++;
    assertEq(n, 29);
  };
}
var a = foo(10);
var b = foo(20);
a();
