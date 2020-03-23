load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:ReferenceError
test();
function test() {
  (arguments);
  F.prototype = new F();
}
