load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
load("1b3dbc1cddb6b5cc8ace501cab6be659.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

// See bug 627984, comment 17, item 2.
var obj = {};
var x;
obj.watch("m", function (id, oldval, newval) {
        x = this.m;
        return newval;
    });
delete obj.m;
obj.m = function () { return this.method; };
obj.m = 2;

reportCompare(0, 0, 'ok');
