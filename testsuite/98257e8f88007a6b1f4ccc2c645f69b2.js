load("201224b0d1c296b45befd2285e95dd42.js");
var i=0;
function f() {
    assertEq(/^[a-z0-9\.]+$/gi.test("Foo.Bar"), true);
    i++;
    if (i < 100)
	f();
}
f();
