load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: 4
function h(o) {
    o.next();
}
function g(o) {
    for (var i=0; i<5; i++) {};
    if (o.x >= 0) {
	for(;;)
	    h(o);
    }
    return o.x;
}
function f() {
    var o = {x: 0, next: function() {
	if (this.x++ > 100)
	    throw 4;
    }};
    g(o);
}
f();
