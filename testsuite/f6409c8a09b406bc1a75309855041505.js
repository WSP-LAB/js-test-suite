load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
var BUGNUMBER = 1185106;
var summary = "async function length";

print(BUGNUMBER + ": " + summary);

assertEq(async function() {}.length, 0);
assertEq(async function(a) {}.length, 1);
assertEq(async function(a, b, c) {}.length, 3);
assertEq(async function(a, b, c, ...d) {}.length, 3);

if (typeof reportCompare === "function")
    reportCompare(true, true);
