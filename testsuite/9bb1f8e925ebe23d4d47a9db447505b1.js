load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

function test() {
  assertTypeErrorMessage(() => { ctypes.StructType(); },
                         "StructType takes one or two arguments");
  assertTypeErrorMessage(() => { ctypes.StructType("a").define(); },
                         "StructType.prototype.define takes one argument");
  assertTypeErrorMessage(() => { ctypes.StructType("a", [])(1, 2, 3); },
                         "StructType constructor takes at most one argument");
  assertTypeErrorMessage(() => { ctypes.StructType("a", [ {"x": ctypes.int32_t }, {"y": ctypes.int32_t }, {"z": ctypes.int32_t }])(1, 2); },
                         "StructType constructor takes 0, 1, or 3 arguments");
  assertTypeErrorMessage(() => { ctypes.StructType("a", [ {"x": ctypes.int32_t } ])().addressOfField(); },
                         "StructType.prototype.addressOfField takes one argument");
}

if (typeof ctypes === "object")
  test();
