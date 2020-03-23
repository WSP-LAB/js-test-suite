load("201224b0d1c296b45befd2285e95dd42.js");

// basic 'with' functionality

var o = {foo: true};
with(o) {
    foo = 10;
}
assertEq(o.foo, 10);
