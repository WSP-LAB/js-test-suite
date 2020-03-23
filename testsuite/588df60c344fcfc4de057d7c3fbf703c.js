load("201224b0d1c296b45befd2285e95dd42.js");
// Can't assign to const is a runtime TypeError

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

function assertTypeError(str) {
  assertThrowsInstanceOf(function () { eval(str); }, TypeError);
}

assertTypeError("(function() { const x = 3; (() => x++)(); return x })()");
assertTypeError("(function() { const x = 3; (() => x++)(); return x++ })()");
assertTypeError("(function() { const x = 2; (() => x++)(); return ++x })()");
assertTypeError("(function() { const x = 2; (() => x++)(); return x += 1 })()");

assertTypeError("(function() { const x = 3; x = 1; return (function() { return x})() })()");
assertTypeError("(function() { const x = 3; x = 1; return (function() { return x})() })()");
assertTypeError("(function() { const x = 3; x++; return (function() { return x})() })()");
assertTypeError("(function() { const x = 3; ++x; return (function() { return x})() })()");
assertTypeError("(function() { const x = 3; x--; return (function() { return x})() })()");
assertTypeError("(function() { const x = 3; --x; return (function() { return x})() })()");
assertTypeError("(function() { const x = 3; x += 1; return (function() { return x})() })()");
assertTypeError("(function() { const x = 3; x -= 1; return (function() { return x})() })()");

assertTypeError("(function() { const x = 3; [x] = [1]; })()");
