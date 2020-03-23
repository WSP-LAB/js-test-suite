load("201224b0d1c296b45befd2285e95dd42.js");

function f(x) {
    return (x % 123.45) >> x;
}
assertEq(f(-123), -4);
