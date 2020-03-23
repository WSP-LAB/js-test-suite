load("201224b0d1c296b45befd2285e95dd42.js");
"use strict"
function f() {
    h = {}
}
var c = 0;
for (var i=0; i<3; i++) {
    try {
	new f();
	assertEq(0, 1);
    } catch(e) {
	c++;
	assertEq(e.message.includes("undeclared variable"), true);
    }
}
assertEq(c, 3);
