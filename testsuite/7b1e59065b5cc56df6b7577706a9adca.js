load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("99af2c3994932cf7fcec8ec85c6dc330.js");
var BUGNUMBER = 1180290;
var summary = 'TypedArray getters should have get prefix';

print(BUGNUMBER + ": " + summary);

let TypedArray = Object.getPrototypeOf(Float32Array.prototype).constructor;

assertEq(Object.getOwnPropertyDescriptor(TypedArray, Symbol.species).get.name, "get [Symbol.species]");
assertEq(Object.getOwnPropertyDescriptor(TypedArray.prototype, "buffer").get.name, "get buffer");
assertEq(Object.getOwnPropertyDescriptor(TypedArray.prototype, "byteLength").get.name, "get byteLength");
assertEq(Object.getOwnPropertyDescriptor(TypedArray.prototype, "byteOffset").get.name, "get byteOffset");
assertEq(Object.getOwnPropertyDescriptor(TypedArray.prototype, "length").get.name, "get length");
assertEq(Object.getOwnPropertyDescriptor(TypedArray.prototype, Symbol.toStringTag).get.name, "get [Symbol.toStringTag]");

if (typeof reportCompare === 'function')
  reportCompare(true, true);
