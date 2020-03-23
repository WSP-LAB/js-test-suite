load("201224b0d1c296b45befd2285e95dd42.js");
var caught = false;
try {
  Reflect.parse("}");
} catch (e) {
  assertEq(e instanceof SyntaxError, true);
  assertEq(e.message.startsWith("unexpected garbage after script, starting with '}'") == -1, false);
  caught = true;
}
assertEq(caught, true);
