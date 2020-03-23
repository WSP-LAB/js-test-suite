load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

function test() {
  assertTypeErrorMessage(() => { ctypes.int32_t.toString.call(1); },
                         "CType.prototype.toString called on incompatible Number");
  assertTypeErrorMessage(() => { ctypes.int32_t.toSource.call(1); },
                         "CType.prototype.toSource called on incompatible Number");
}

if (typeof ctypes === "object")
  test();
