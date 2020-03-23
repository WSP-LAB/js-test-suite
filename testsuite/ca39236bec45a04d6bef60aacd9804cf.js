load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("9f65b4024a3bba5864aa373908b00833.js");
// Tests annex B.3.5 that introduces a var via direct eval.

var x = "global-x";
var log = "";

// Tests that direct eval works.
function g() {
  try { throw 8; } catch (x) {
    eval("var x = 42;");
    log += x;
  }
  x = "g";
  log += x;
}
g();

assertEq(x, "global-x");
assertEq(log, "42g");

if ("reportCompare" in this)
  reportCompare(true, true)
