load("201224b0d1c296b45befd2285e95dd42.js");
// Iterating over the argument to WeakMap can throw. The exception is
// propagated.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

function data() {
    yield [{}, "XR22/Z"];
    yield [{}, "23D-BN"];
    throw "oops";
}

var it = data();
assertThrowsValue(() => new WeakMap(it), "oops");

function* data2() {
    yield [{}, "XR22/Z"];
    yield [{}, "23D-BN"];
    throw "oops";
}

var it2 = data2();
assertThrowsValue(() => new WeakMap(it2), "oops");
