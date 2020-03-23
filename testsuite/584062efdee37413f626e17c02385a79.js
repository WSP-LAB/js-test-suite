load("201224b0d1c296b45befd2285e95dd42.js");
gczeal(4,1);
var iterable = {persistedProp: 17};
iterable.__iterator__ = function() {
    yield ["foo", 2];
    yield ["bar", 3];
};
var it = Iterator(iterable);
assertEq(it.next().toString(), "foo,2");
assertEq(it.next().toString(), "bar,3");
