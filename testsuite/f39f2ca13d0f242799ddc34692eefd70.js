load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
load("008eabf74323023a3b4794d71c356b14.js");
testJSON("{}...", true);
testJSON('{"foo": truBBBB}', true);
testJSON('{foo: truBBBB}', true);
testJSON('{"foo": undefined}', true);
testJSON('{"foo": ]', true);
testJSON('{"foo', true);

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("Tests complete");
