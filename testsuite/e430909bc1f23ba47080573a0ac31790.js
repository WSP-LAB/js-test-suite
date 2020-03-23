load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
var list = Object.getOwnPropertyNames(this);
var found = list.indexOf("Proxy") != -1;
assertEq(found, true)
reportCompare(true, true)
