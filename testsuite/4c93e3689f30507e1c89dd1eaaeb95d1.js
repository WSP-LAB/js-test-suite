load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("41e6217a79cd5540df13626a4eafe149.js");
var BUGNUMBER = 1099956;
var summary =
  "The token next to yield should be tokenized as non-operand if yield is " +
  "a valid name";

printBugNumber(BUGNUMBER);
printStatus(summary);

var yield = 12, a = 3, b = 6, g = 2;
var yieldParsedAsIdentifier = false;

yield /a; yieldParsedAsIdentifier = true; b/g;

assertEq(yieldParsedAsIdentifier, true);

reportCompare(true, true);
