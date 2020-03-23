load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:Error

if (!this.hasOwnProperty("TypedObject"))
  throw new Error("type too large");

var AA = TypedObject.uint8.array(2147483647).array(5);
var aa = new AA();
var aa0 = aa[0];
