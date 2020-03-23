load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

function test() {
  assertTypeErrorMessage(() => { ctypes.int32_t.ptr(0).isNull.call(1); },
                         "PointerType.prototype.isNull called on incompatible object, got the object (new Number(1))");
  assertTypeErrorMessage(() => { ctypes.int32_t.ptr(0).isNull.call({}); },
                         "PointerType.prototype.isNull called on incompatible object, got the object ({})");
  assertTypeErrorMessage(() => { ctypes.int32_t.ptr(0).increment.call(1); },
                         "PointerType.prototype.increment called on incompatible object, got the object (new Number(1))");
  assertTypeErrorMessage(() => { ctypes.int32_t.ptr(0).increment.call(ctypes.int32_t(0)); },
                         "PointerType.prototype.increment called on non-PointerType CData, got ctypes.int32_t(0)");
  assertTypeErrorMessage(() => { ctypes.int32_t.ptr(0).decrement.call(1); },
                         "PointerType.prototype.decrement called on incompatible object, got the object (new Number(1))");
  assertTypeErrorMessage(() => { ctypes.int32_t.ptr(0).decrement.call(ctypes.int32_t(0)); },
                         "PointerType.prototype.decrement called on non-PointerType CData, got ctypes.int32_t(0)");
}

if (typeof ctypes === "object")
  test();
