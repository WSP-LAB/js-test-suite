load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
var BUGNUMBER = 1287524;
var summary = 'RegExp.prototype[@@replace] should not use optimized path if RegExp.prototype.unicode is modified.';

print(BUGNUMBER + ": " + summary);

Object.defineProperty(RegExp.prototype, "unicode", {
  get() {
    RegExp.prototype.exec = () => null;
  }
});

var rx = RegExp("a", "g");
var s = "abba";
var r = rx[Symbol.replace](s, "c");
assertEq(r, "abba");

if (typeof reportCompare === "function")
  reportCompare(true, true);
