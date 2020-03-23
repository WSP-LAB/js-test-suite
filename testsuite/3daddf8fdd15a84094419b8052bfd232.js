load("201224b0d1c296b45befd2285e95dd42.js");
// export-from should throw SyntaxError until it's implemented.

var caught = false;
try {
  eval("export { a } from 'b';");
} catch (e) {
  caught = true;
}
assertEq(caught, true);
