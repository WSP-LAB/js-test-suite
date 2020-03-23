load("201224b0d1c296b45befd2285e95dd42.js");
var o = {
    g: function(a) {
	return a;
    }
};

function f() {
    var z;
    for (var i = 0; i < 10; ++i) {
	z = o.g(i);
	assertEq(z, i);
    }
}

f();
