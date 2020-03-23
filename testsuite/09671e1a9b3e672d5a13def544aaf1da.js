load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
var BUGNUMBER = 1287525;
var summary = "RegExp.prototype[@@split] shouldn't use optimized path if limit is not number.";

print(BUGNUMBER + ": " + summary);

var rx = /a/;
var r = rx[Symbol.split]("abba", {valueOf() {
  RegExp.prototype.exec = () => null;
  return 100;
}});
assertEq(r.length, 1);

if (typeof reportCompare === "function")
    reportCompare(true, true);
