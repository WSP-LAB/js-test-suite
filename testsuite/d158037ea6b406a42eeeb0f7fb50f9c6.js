load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
var BUGNUMBER = 1180290;
var summary = 'Array getters should have get prefix';

print(BUGNUMBER + ": " + summary);

assertEq(Object.getOwnPropertyDescriptor(Array, Symbol.species).get.name, "get [Symbol.species]");

if (typeof reportCompare === 'function')
  reportCompare(true, true);
