load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
var BUGNUMBER = 1322319;
var summary = "RegExp.prototype.split should throw if RegRxp.prototype.flags is deleted."

print(BUGNUMBER + ": " + summary);

delete RegExp.prototype.flags;

assertThrowsInstanceOf(() => "aaaaa".split(/a/), SyntaxError);

if (typeof reportCompare === "function")
    reportCompare(true, true);
