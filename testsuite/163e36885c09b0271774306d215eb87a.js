load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| --ion-pgo=on;

function test() {
  foo(startTest("", c(""),
    test([{ 0 : c(), 0 : toString("", c(), [], tab([])) }])
  ));
  function f() {};
}

try {
  test();
} catch(e) {}
