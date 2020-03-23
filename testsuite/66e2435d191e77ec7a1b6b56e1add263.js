load("201224b0d1c296b45befd2285e95dd42.js");
function f(x) {
    eval("a = 3");
    x.p = x.p = a;
    assertEq(x.p, 3);
}
f({p: 2});
