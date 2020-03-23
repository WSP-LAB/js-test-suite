load("201224b0d1c296b45befd2285e95dd42.js");
function g() { }
function f(b) {
    var test;
    if (b) {
        g.apply(null, arguments);
        var test = 1;
    } else {
        f(false);
    }
}
f(true);
