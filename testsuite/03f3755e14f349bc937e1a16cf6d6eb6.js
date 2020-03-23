load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
var BUGNUMBER = 636635;
var summary = "A function created by Function constructor shouldn't have anonymous binding";

print(BUGNUMBER + ": " + summary);

assertEq(new Function("return typeof anonymous")(), "undefined");
assertEq(new Function("return function() { return typeof anonymous; }")()(), "undefined");
assertEq(new Function("return function() { eval(''); return typeof anonymous; }")()(), "undefined");

if (typeof reportCompare === "function")
    reportCompare(true, true);
