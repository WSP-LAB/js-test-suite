load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

function test() {
  assertTypeErrorMessage(() => { ctypes.void_t(); },
                         "cannot construct from void_t");
  assertTypeErrorMessage(() => { ctypes.CType(); },
                         "cannot construct from abstract type");
}

if (typeof ctypes === "object")
  test();
