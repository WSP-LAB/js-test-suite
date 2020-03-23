load("201224b0d1c296b45befd2285e95dd42.js");
var g;

function h() {
    return arguments.length;
}

function f() {
    var args = arguments;
    g = function() { return h.apply(this, args); }
}

for (var i = 0; i < 10; ++i) {
    f();
}

assertEq(g(), 0);
