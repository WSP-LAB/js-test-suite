load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
var BUGNUMBER = 1322035;
var summary = 'RegExp.prototype.test should update lastIndex to correct position even if pattern starts with .*';

print(BUGNUMBER + ": " + summary);

var regExp = /.*x?/g;
regExp.test('12345');
assertEq(regExp.lastIndex, 5);

regExp = /.*x*/g;
regExp.test('12345');
assertEq(regExp.lastIndex, 5);

regExp = /.*()/g;
regExp.test('12345');
assertEq(regExp.lastIndex, 5);

regExp = /.*(x|)/g;
regExp.test('12345');
assertEq(regExp.lastIndex, 5);

if (typeof reportCompare === "function")
  reportCompare(true, true);
