load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    var x = 1.23;
    var y = [].length;
    x = ++y;
    y - 1;
}
f();

function g(q) {
    var x = 1.23;
    var y = [].length;
    x = ++y;
    if (q)
      assertEq(y + 5, 6);
}
g(1);
