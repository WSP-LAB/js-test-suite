load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
var BUGNUMBER = 887016;
var summary = "Implement RegExp.prototype[@@search].";

print(BUGNUMBER + ": " + summary);

assertEq(RegExp.prototype[Symbol.search].name, "[Symbol.search]");
assertEq(RegExp.prototype[Symbol.search].length, 1);
var desc = Object.getOwnPropertyDescriptor(RegExp.prototype, Symbol.search);
assertEq(desc.configurable, true);
assertEq(desc.enumerable, false);
assertEq(desc.writable, true);

var re = /B/;
var v = re[Symbol.search]("abcAbcABC");
assertEq(v, 7);

re = /B/i;
v = re[Symbol.search]("abcAbcABCD");
assertEq(v, 1);

re = /d/;
v = re[Symbol.search]("abcAbcABCD");
assertEq(v, -1);

if (typeof reportCompare === "function")
    reportCompare(true, true);
