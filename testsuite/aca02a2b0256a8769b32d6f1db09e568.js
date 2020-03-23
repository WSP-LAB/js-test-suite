load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:Error;

if (!this.hasOwnProperty("TypedObject"))
  throw new Error();

var A = TypedObject.uint8.array(10);
var a = new A();
a.forEach(function(val, i) {
  assertEq(arguments[5], a);
});
