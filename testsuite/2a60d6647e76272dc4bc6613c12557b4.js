load("201224b0d1c296b45befd2285e95dd42.js");
function f(x, y, z) {
    if (1)
        x = z;
    return x + y;
}

assertEq(f(0, 2, {}), "[object Object]2")
