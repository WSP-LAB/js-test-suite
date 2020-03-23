load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("9f65b4024a3bba5864aa373908b00833.js");
var BUGNUMBER = 1263118;
var summary = "RegExp.prototype[@@replace] with non-standard $+ substitution.";

print(BUGNUMBER + ": " + summary);

assertEq(/(a)(b)(c)/[Symbol.replace]("abc", "[$+]"), "[c]");
assertEq(/(a)(b)c/[Symbol.replace]("abc", "[$+]"), "[b]");
assertEq(/(a)bc/[Symbol.replace]("abc", "[$+]"), "[a]");
assertEq(/abc/[Symbol.replace]("abc", "[$+]"), "[]");

if (typeof reportCompare === "function")
    reportCompare(true, true);
