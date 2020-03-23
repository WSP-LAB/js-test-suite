load("201224b0d1c296b45befd2285e95dd42.js");
function foo() {
};
function f() {
    var e = foo;
    a = new e();
    assertEq(typeof(a), "object");
    e=a;
}
f();
