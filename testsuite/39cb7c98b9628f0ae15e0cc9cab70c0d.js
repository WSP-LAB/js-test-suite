load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

function test() {
  assertTypeErrorMessage(() => { ctypes.FunctionType(); },
                         "FunctionType takes two or three arguments");
  assertTypeErrorMessage(() => { ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, []).ptr({}, 1); },
                         "FunctionType constructor takes one argument");
}

if (typeof ctypes === "object")
  test();
