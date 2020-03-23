load("201224b0d1c296b45befd2285e95dd42.js");

eval('(function () {\
function range(n) {\
  for (var i = 0; i < 5000; i++)\
    yield i;\
}\
var r = range(10);\
var i = 0;\
for (var x in r)\
  assertEq(x,i++);\
' + '})();');
