load("201224b0d1c296b45befd2285e95dd42.js");
// Iterating over the argument to Map can throw. The exception is propagated.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

function data2() {
    yield [{}, "XR22/Z"];
    yield [{}, "23D-BN"];
    throw "oops";
}

var it = data2();
assertThrowsValue(function () { new Map(it); }, "oops");
