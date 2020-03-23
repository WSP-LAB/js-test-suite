load("201224b0d1c296b45befd2285e95dd42.js");

function f() {
    var x = 0;
    var a = [{toString: () => x++}];
    for (var i=0; i<10000; i++)
	a.join("");
    assertEq(x, 10000);
}
f();
