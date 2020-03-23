load("201224b0d1c296b45befd2285e95dd42.js");
eval("function f() { function g() {} return g; }");
assertEq(f().prototype !== f().prototype, true);

function f1() {
    function g1() {
        function h1() { return h1; }
    }
    return g1;
}
assertEq(f1().prototype !== f1().prototype, true);
