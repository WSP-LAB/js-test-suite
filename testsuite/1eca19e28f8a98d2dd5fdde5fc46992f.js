load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:TypeError
// Array.of can be transplanted to builtin constructors.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

Uint8Array.of = Array.of;
assertDeepEq(new Uint8Array.of(0x12, 0x34, 0x5678, 0x9abcdef), new Uint8Array([0x12, 0x34, 0x78, 0xef]));
