load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
var BUGNUMBER = 887016;
var summary = "String.prototype.replace should use and update lastIndex if sticky flag is set";

print(BUGNUMBER + ": " + summary);

var input = "abcdeabcdeabcdefghij";
var re = new RegExp("abcde", "y");
re.test(input);
assertEq(re.lastIndex, 5);
var ret = input.replace(re, "ABCDE");
assertEq(ret, "abcdeABCDEabcdefghij");
assertEq(re.lastIndex, 10);
ret = input.replace(re, "ABCDE");
assertEq(ret, "abcdeabcdeABCDEfghij");
assertEq(re.lastIndex, 15);
ret = input.replace(re, "ABCDE");
assertEq(ret, "abcdeabcdeabcdefghij");
assertEq(re.lastIndex, 0);

if (typeof reportCompare === "function")
    reportCompare(true, true);
