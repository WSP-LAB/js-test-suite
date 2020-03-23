load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
var BUGNUMBER = 1180290;
var summary = 'Object accessors should have get prefix';

print(BUGNUMBER + ": " + summary);

assertEq(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").get.name, "get __proto__");
assertEq(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set.name, "set __proto__");

if (typeof reportCompare === 'function')
  reportCompare(true, true);
