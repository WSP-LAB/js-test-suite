load("201224b0d1c296b45befd2285e95dd42.js");
let getCtor = getSelfHostedValue('GetBuiltinConstructor');

assertEq(getCtor('Array'), Array);

let origArray = Array;
Array = function(){};
assertEq(getCtor('Array') == Array, false);
assertEq(getCtor('Array'), origArray);

let origMap = Map;
Map = function(){};
assertEq(getCtor('Map') == Map, false);
assertEq(getCtor('Map'), origMap);
