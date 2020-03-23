load("201224b0d1c296b45befd2285e95dd42.js");
function assertThrowsReferenceError(f) {
  var e = null;
  try {
    f();
  } catch (ex) {
    e = ex;
  }
  assertEq(e instanceof ReferenceError, true);
}

// TDZ is effectful, don't optimize out x.
assertThrowsReferenceError(function () { x; let x; });
assertThrowsReferenceError(function () { x; const x = undefined; });
