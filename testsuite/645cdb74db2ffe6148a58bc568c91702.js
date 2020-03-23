load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("74295afcbe3851329365d06de2aa5a5e.js");
var a = [0, 1];
var iterations = 0;
for (var k in a) {
  iterations++;
  a.length = 1;
}
assertEq(iterations, 1);

if (typeof reportCompare === "function")
  reportCompare(true, true);
