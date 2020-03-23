load("201224b0d1c296b45befd2285e95dd42.js");
with({}) {
    function f() {
        this.foo = "bar";
    }
    o = new f();
    assertEq(o.foo, "bar");
}
