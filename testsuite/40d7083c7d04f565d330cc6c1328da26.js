load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
load("7313fa08969f1df598c154ed8ced2840.js");
//bug 473941
var regexp;

regexp = /(?=)/;
assertEq(regexp.test('test'), true);

if (typeof reportCompare === "function")
  reportCompare(true, true);
