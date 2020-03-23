load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
// "let" is not allowed as an identifier.

assertThrowsInstanceOf(function () { eval('[for (let of y) foo]') }, SyntaxError);
assertThrowsInstanceOf(function () { eval('(for (let of y) foo)') }, SyntaxError);

reportCompare(null, null, "test");
