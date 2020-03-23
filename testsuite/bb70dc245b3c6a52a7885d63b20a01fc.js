load("201224b0d1c296b45befd2285e95dd42.js");
function assertNotSame(expected, actual, message = "") { }
function g3(h = () => arguments) {
  function arguments() { }
  assertNotSame(arguments, h());
}
g3();
