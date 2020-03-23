load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
var BUGNUMBER = 1274393;
var summary = "RegExp constructor should check the pattern syntax again when adding unicode flag.";

print(BUGNUMBER + ": " + summary);

assertThrowsInstanceOf(() => RegExp(/\-/, "u"), SyntaxError);

if (typeof reportCompare === "function")
    reportCompare(true, true);
