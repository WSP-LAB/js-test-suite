load("201224b0d1c296b45befd2285e95dd42.js");
// for-of throws if the target is a typed array prototype object.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
assertThrowsInstanceOf(function () {
    for (var v of Int8Array.prototype)
        throw "FAIL";
}, TypeError);
