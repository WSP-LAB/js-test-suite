load("201224b0d1c296b45befd2285e95dd42.js");
function f(...rest) {
    function nested () {
        return rest;
    }
    return nested;
}
assertEq(f(1, 2, 3)().toString(), [1, 2, 3].toString());