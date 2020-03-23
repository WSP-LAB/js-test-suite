load("201224b0d1c296b45befd2285e95dd42.js");
// Binary: cache/js-dbg-64-e08a67884b9b-linux
// Flags: -m -n -a
//
load("19d7bc83becec11ee32c3a85fbc4d93d.js");
// has no @@iterator property
assertThrowsInstanceOf(() => {function f([x]){}f(DataView.prototype)}, TypeError);
