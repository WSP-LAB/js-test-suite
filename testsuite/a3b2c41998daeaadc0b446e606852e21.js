load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
var BUGNUMBER = 1180290;
var summary = 'DataView getters should have get prefix';

print(BUGNUMBER + ": " + summary);

assertEq(Object.getOwnPropertyDescriptor(DataView.prototype, "buffer").get.name, "get buffer");
assertEq(Object.getOwnPropertyDescriptor(DataView.prototype, "byteLength").get.name, "get byteLength");
assertEq(Object.getOwnPropertyDescriptor(DataView.prototype, "byteOffset").get.name, "get byteOffset");

if (typeof reportCompare === 'function')
  reportCompare(true, true);
