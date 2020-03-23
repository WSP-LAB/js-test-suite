load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");


function values(g) {
  return [for (x of g) x];
}

function argumentsTest() {
  return values((for (i of [0,1,2]) arguments[i]));
}

assertDeepEq(argumentsTest('a', 'b', 'c'), ['a', 'b', 'c']);

if (typeof reportCompare === "function")
  reportCompare(true, true);
