load("201224b0d1c296b45befd2285e95dd42.js");
// Test that Debugger.Frame.eval correctly throws on redeclaration.

load("00e0aa336e6c8b65ee1f164279cff5fc.js");

let x;

function f() {
  evalInFrame(1, "var x;");
}

var log = "";

try {
  f();
} catch (e) {
  log += "e";
}

assertEq(log, "e");
