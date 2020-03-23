load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

function test() {
  assertTypeErrorMessage(() => { ctypes.PointerType(); },
                         "PointerType takes one argument");
  assertTypeErrorMessage(() => { ctypes.int32_t.ptr(1, 2, 3, 4); },
                         "PointerType constructor takes 0, 1, 2, or 3 arguments");
}

if (typeof ctypes === "object")
  test();
