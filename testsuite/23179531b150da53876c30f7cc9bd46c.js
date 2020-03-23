load("201224b0d1c296b45befd2285e95dd42.js");
// Test that SavedFrame instances are frozen and can't be messed with.

// Strict mode so that mutating frozen objects doesn't silently fail.
"use strict";

const s = saveStack();

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

assertThrowsInstanceOf(() => s.source = "fake.url",
                       TypeError);

assertThrowsInstanceOf(() => {
  Object.defineProperty(s.__proto__, "line", {
    get: () => 0
  })
}, TypeError);
