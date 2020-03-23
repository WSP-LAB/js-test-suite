load("201224b0d1c296b45befd2285e95dd42.js");
// Array.of does not overwrite non-configurable properties.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var obj;
function C() {
    obj = this;
    Object.defineProperty(this, 0, {value: "v", configurable: false});
}
try { Array.of.call(C, 1); } catch (e) {}
assertDeepEq(Object.getOwnPropertyDescriptor(obj, 0), {
    value: "v",
    writable: false,
    enumerable: false,
    configurable: false
});
