load("201224b0d1c296b45befd2285e95dd42.js");
gczeal(4,1);
function check(o)
{
    print(o);
    assertEq(o.b, 3);
}
function f()
{
    for (var i=0; i<3; i++) {
	var o = {b: 3};
	check(o);
    }
}
f();
