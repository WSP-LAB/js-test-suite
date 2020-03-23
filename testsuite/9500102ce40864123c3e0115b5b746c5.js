load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

function test() {
  assertTypeErrorMessage(() => { ctypes.FunctionType(ctypes.default_abi, ctypes.void_t).call.call(1); },
                         "Function.prototype.call called on incompatible number");
  assertTypeErrorMessage(() => { ctypes.FunctionType(ctypes.default_abi, ctypes.void_t).call.call(ctypes.int32_t(0)); },
                         "FunctionType.prototype.call called on non-PointerType CData, got ctypes.int32_t(0)");
  assertTypeErrorMessage(() => { ctypes.FunctionType(ctypes.default_abi, ctypes.void_t).call.call(ctypes.int32_t.ptr(0)); },
                         "FunctionType.prototype.call called on non-FunctionType pointer, got ctypes.int32_t.ptr(ctypes.UInt64(\"0x0\"))");
}

if (typeof ctypes === "object")
  test();
