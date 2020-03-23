load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("9f65b4024a3bba5864aa373908b00833.js");
var BUGNUMBER = 1263139;
var summary = "String.prototype.match with non-string non-standard flags argument.";

print(BUGNUMBER + ": " + summary);

var called;
var flags = {
  toString() {
    called = true;
    return "";
  }
};

called = false;
"a".match("a", flags);
assertEq(called, false);

called = false;
"a".search("a", flags);
assertEq(called, false);

called = false;
"a".replace("a", "b", flags);
assertEq(called, false);

if (typeof reportCompare === "function")
    reportCompare(true, true);
