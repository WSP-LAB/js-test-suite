load("201224b0d1c296b45befd2285e95dd42.js");
function no_defaults(a, ...rest) {
    return rest;
    function rest() { return a; }
}
assertEq(typeof no_defaults(), "function");
function with_defaults(a=42, ...rest) {
    return rest;
    function rest() { return a; }
}
assertEq(typeof with_defaults(), "function");
