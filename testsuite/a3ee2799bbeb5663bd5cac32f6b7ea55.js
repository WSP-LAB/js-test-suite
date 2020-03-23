load("201224b0d1c296b45befd2285e95dd42.js");
enableGeckoProfiling();
function foo(obj,x,y,z) {
    if (!y)
	assertEq(0, 1);
    obj.x = x;
    return y + z;
}
function bar() {
    var objz = {x:2}
    for(var i = 0; i < 1100; i++) {
	foo(objz,1,2,3);
	foo(objz, false, "bar", "foo");
    }
}
bar();
