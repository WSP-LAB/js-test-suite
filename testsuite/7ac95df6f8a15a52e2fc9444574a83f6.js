load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
var BUGNUMBER = 887016;
var summary = "Implement RegExp.prototype[@@split].";

print(BUGNUMBER + ": " + summary);

assertEq(RegExp.prototype[Symbol.split].name, "[Symbol.split]");
assertEq(RegExp.prototype[Symbol.split].length, 2);
var desc = Object.getOwnPropertyDescriptor(RegExp.prototype, Symbol.split);
assertEq(desc.configurable, true);
assertEq(desc.enumerable, false);
assertEq(desc.writable, true);

var re = /b/;
var v = re[Symbol.split]("abcAbcABC");
assertEq(JSON.stringify(v), `["a","cA","cABC"]`);

re = /d/;
v = re[Symbol.split]("abcAbcABC");
assertEq(JSON.stringify(v), `["abcAbcABC"]`);

re = /b/ig;
v = re[Symbol.split]("abcAbcABC");
assertEq(JSON.stringify(v), `["a","cA","cA","C"]`);

re = /b/ig;
v = re[Symbol.split]("abcAbcABC", 2);
assertEq(JSON.stringify(v), `["a","cA"]`);

if (typeof reportCompare === "function")
    reportCompare(true, true);
