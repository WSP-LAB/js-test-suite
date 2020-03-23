load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

function test() {
  assertTypeErrorMessage(() => { ctypes.ArrayType(); },
                         "ArrayType takes one or two arguments");
  assertTypeErrorMessage(() => { ctypes.int32_t.array(10)(1, 2); },
                         "size defined ArrayType constructor takes at most one argument");
  assertTypeErrorMessage(() => { ctypes.int32_t.array()(1, 2); },
                         "size undefined ArrayType constructor takes one argument");
  assertTypeErrorMessage(() => { ctypes.int32_t.array(10)().addressOfElement(); },
                         "ArrayType.prototype.addressOfElement takes one argument");
}

if (typeof ctypes === "object")
  test();
