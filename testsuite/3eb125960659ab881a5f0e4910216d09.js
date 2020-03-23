load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

function test() {
  assertTypeErrorMessage(() => { ctypes.cast(ctypes.int32_t(0), ctypes.StructType("foo")); },
                         "target type foo has undefined size");

  assertTypeErrorMessage(() => { ctypes.cast(ctypes.int32_t(0), ctypes.StructType("foo", [ { x: ctypes.int32_t }, { y: ctypes.int32_t } ])); },
                         "target type foo has larger size than source type ctypes.int32_t (8 > 4)");
}

if (typeof ctypes === "object")
  test();
