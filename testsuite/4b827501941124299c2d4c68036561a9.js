load("201224b0d1c296b45befd2285e95dd42.js");
function whoo() {
    (new Object()).foo()
}
Object.prototype.foo = function() { return undefined };
whoo();
Object.prototype.foo = undefined;
gc();
try {
    whoo();
    assertEq(0, 1);
} catch(e) {
    assertEq(e instanceof TypeError, true);
}
