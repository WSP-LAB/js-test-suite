load("201224b0d1c296b45befd2285e95dd42.js");
function f(o)
{
    print(o instanceof String);
}

var g = newGlobal();
f(new Object());
var o1 = g.eval('new Object()');
var o2 = Object.create(o1);
f(o2);
