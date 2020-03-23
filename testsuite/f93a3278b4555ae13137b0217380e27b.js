load("201224b0d1c296b45befd2285e95dd42.js");

function f(x) {
    for (var i = 0; i < 40; ++i) {
	var stack = getBacktrace({args: true});
	(function() { g = x;});
    }
}
f(1);
