load("201224b0d1c296b45befd2285e95dd42.js");
load("6ec98b17981f95f4363b8bc9869495e2.js");

if (globalPrototypeChainIsMutable())
  __proto__ = Function();

eval("\
var MS = 16;\
addNewTestCase(new Date(1899,11,31,16,0,0), \"new Date(1899,11,31,16,0,0)\", typeof UTC_DAY == 'undefined');\
function addNewTestCase( DateCase, DateString, ResultArray ) {\
        ResultArray[MS];\
}\
");
