load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("fec05e691cc28279400c1df89b47a7cf.js");
var BUGNUMBER = 887016;
var summary = "Call RegExp.prototype[@@search] from String.prototype.search.";

print(BUGNUMBER + ": " + summary);

var called = 0;
var myRegExp = {
  [Symbol.search](S) {
    assertEq(S, "abcAbcABC");
    called++;
    return 42;
  }
};
assertEq("abcAbcABC".search(myRegExp), 42);
assertEq(called, 1);

called = 0;
RegExp.prototype[Symbol.search] = function(S) {
  assertEq(S, "abcAbcABC");
  called++;
  return 43;
};
assertEq("abcAbcABC".search("abc"), 43);
assertEq(called, 1);

if (typeof reportCompare === "function")
    reportCompare(true, true);
