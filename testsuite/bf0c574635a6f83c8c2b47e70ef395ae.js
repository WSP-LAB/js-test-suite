load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

function test() {
  assertTypeErrorMessage(() => { ctypes.int32_t(1, 2, 3); },
                         "CType constructor takes at most one argument");
  assertTypeErrorMessage(() => { ctypes.int32_t.array(1, 2); },
                         "CType.prototype.array takes at most one argument");
}

if (typeof ctypes === "object")
  test();
