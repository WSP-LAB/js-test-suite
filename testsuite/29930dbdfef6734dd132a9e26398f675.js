load("201224b0d1c296b45befd2285e95dd42.js");
// Array.of does a strict assignment to the new object's .length.
// The assignment is strict even if the code we're calling from is not strict.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

function Empty() {}
Empty.of = Array.of;
Object.defineProperty(Empty.prototype, "length", {get: () => 0});

var nothing = new Empty;
nothing.length = 2;  // no exception; this is not a strict mode assignment

assertThrowsInstanceOf(() => Empty.of(), TypeError);
