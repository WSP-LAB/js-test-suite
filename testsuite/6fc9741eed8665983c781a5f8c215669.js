load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:TypeError

if (!this.hasOwnProperty("TypedObject"))
  throw new TypeError();

// Test that we detect invalid lengths supplied to unsized array
// constructor. Public domain.

var AA = TypedObject.uint8.array(2147483647).array();
var aa = new AA(-1);

