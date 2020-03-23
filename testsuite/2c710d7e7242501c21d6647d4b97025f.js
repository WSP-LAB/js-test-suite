load("201224b0d1c296b45befd2285e95dd42.js");
// Test access to a 0-sized element (in this case,
// a zero-length array).

if (!this.hasOwnProperty("TypedObject"))
  quit();

var AA = TypedObject.uint8.array(0.).array(5);
var aa = new AA();
var aa0 = aa[0];
