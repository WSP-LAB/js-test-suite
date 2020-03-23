load("201224b0d1c296b45befd2285e95dd42.js");
/* Test String.prototype.repeat */

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

assertEq("abc".repeat(1), "abc");
assertEq("abc".repeat(2), "abcabc");
assertEq("abc".repeat(3), "abcabcabc");
assertEq("a".repeat(10), "aaaaaaaaaa");
assertEq("abc".repeat(0), "");
assertEq("abc".repeat(2.9), "abcabc");

var myobj = {toString : () => "abc", repeat : String.prototype.repeat};
assertEq(myobj.repeat(1), "abc");
assertEq(myobj.repeat(2), "abcabc");

assertThrowsInstanceOf(function() {
                         "abc".repeat(-1);
                       }, RangeError,
                       "String.prototype.repeat should raise RangeError on negative arguments");
assertThrowsInstanceOf(function() {
                         "abc".repeat(Number.POSITIVE_INFINITY);
                       }, RangeError,
                       "String.prototype.repeat should raise RangeError on excedding maximum string length");
assertThrowsInstanceOf(function() {
                         "abc".repeat(1 << 29);
                       }, RangeError,
                       "String.prototype.repeat should raise RangeError on excedding maximum string length");

assertEq("".repeat(5), "");
assertEq("".repeat(1 << 29), "");
