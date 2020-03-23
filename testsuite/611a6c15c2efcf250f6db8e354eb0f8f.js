load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

function test() {
  assertTypeErrorMessage(() => { ctypes.FunctionType(ctypes.default_abi, ctypes.int32_t, 1); },
                         "third argument of FunctionType must be an array");
}

if (typeof ctypes === "object")
  test();
