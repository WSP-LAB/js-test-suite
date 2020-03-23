load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
var BUGNUMBER = 887016;
var summary = "RegExp.prototype[@@split] should check if this value is RegExp.";

print(BUGNUMBER + ": " + summary);

var obj = { flags: "", toString: () => "-" };
assertDeepEq(RegExp.prototype[Symbol.split].call(obj, "a-b-c"),
             ["a", "b", "c"]);

if (typeof reportCompare === "function")
    reportCompare(true, true);

