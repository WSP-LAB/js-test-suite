load("201224b0d1c296b45befd2285e95dd42.js");
// Bug 880447

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

function f() {
    yield yield 1;
}

var g = f();
assertEq(g.next(), 1);
assertEq(g.send("hello"), "hello");
assertThrowsValue(() => g.next(), StopIteration);
