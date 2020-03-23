load("201224b0d1c296b45befd2285e95dd42.js");
var caught = false;
try {
  evaluate(cacheEntry(""), {saveBytecode: {value: true}, global: this});
  [[0]];
} catch (err) {
  caught = true;
  assertEq(err.message, "compartment cannot save singleton anymore.");
}
assertEq(caught, true);