load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    var n = null;
    return n++;
}

print(f());
assertEq(f(), 0);
