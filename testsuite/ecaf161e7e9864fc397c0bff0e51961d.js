load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("fec05e691cc28279400c1df89b47a7cf.js");
var BUGNUMBER = 887016;
var summary = "Call RegExp.prototype[@@match] from String.prototype.match.";

print(BUGNUMBER + ": " + summary);

var called = 0;
var myRegExp = {
  [Symbol.match](S) {
    assertEq(S, "abcAbcABC");
    called++;
    return 42;
  }
};
assertEq("abcAbcABC".match(myRegExp), 42);
assertEq(called, 1);

var origMatch = RegExp.prototype[Symbol.match];

called = 0;
RegExp.prototype[Symbol.match] = function(S) {
  assertEq(S, "abcAbcABC");
  called++;
  return 43;
};
assertEq("abcAbcABC".match("abc"), 43);
assertEq(called, 1);

RegExp.prototype[Symbol.match] = origMatch;

if (typeof reportCompare === "function")
    reportCompare(true, true);
