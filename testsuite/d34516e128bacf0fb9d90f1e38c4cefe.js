load("201224b0d1c296b45befd2285e95dd42.js");
try {
  let x = ((function f(y) {
    if (y > 0) {
      f(-1)
    }
    x
  })(1))
} catch (e) {
  assertEq(e instanceof ReferenceError, true);
}
