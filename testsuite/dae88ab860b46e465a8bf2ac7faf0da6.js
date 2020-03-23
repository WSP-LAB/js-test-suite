load("201224b0d1c296b45befd2285e95dd42.js");
// Array.of makes real arrays.

function check(a) {
    assertEq(Object.getPrototypeOf(a), Array.prototype);
    assertEq(Array.isArray(a), true);
    a[9] = 9;
    assertEq(a.length, 10);
}

check(Array.of());
check(Array.of(0));
check(Array.of(0, 1, 2));

var f = Array.of;
check(f());
