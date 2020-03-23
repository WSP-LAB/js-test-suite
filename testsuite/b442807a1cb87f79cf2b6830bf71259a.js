load("201224b0d1c296b45befd2285e95dd42.js");
function f(s) {
    eval(s);
    return function() {
        with({}) {};
        return b;
    };
}
var b = 1;
var g1 = f("");
var g2 = f("var b = 2;");
g1('');
assertEq(g2(''), 2);
