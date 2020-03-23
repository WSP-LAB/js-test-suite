load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
load("1b3dbc1cddb6b5cc8ace501cab6be659.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

// See bug 627984, comment 17, item 1.
var obj;
var methods = [];
for (var i = 0; i < 2; i++) {
    obj = {m: function () { return this.x; }};
    obj.watch("m", function (id, oldval, newval) { methods[i] = oldval; });
    obj.m = 0;
}
assertEq(typeof methods[0], "function");
assertEq(typeof methods[1], "function");
assertEq(methods[0] !== methods[1], true);

reportCompare(0, 0, 'ok');
