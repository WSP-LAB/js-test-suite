load("201224b0d1c296b45befd2285e95dd42.js");
// If Array.of tries to overwrite a non-configurable property, it throws a TypeError.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

function C() {
    Object.defineProperty(this, 0, {value: "v", configurable: false});
}
assertThrowsInstanceOf(() => Array.of.call(C, 1, 2, 3), TypeError);
