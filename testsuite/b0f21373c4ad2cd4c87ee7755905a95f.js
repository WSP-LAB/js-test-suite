load("201224b0d1c296b45befd2285e95dd42.js");
gczeal(4,1);
function g()
{
    try {
	return [];
    } catch (e) {}
}
function f()
{
    for (var i=0; i<2; i++) {
	var o = {a: g(),
		 a: g()};
	print(i);
    }
}
f();
