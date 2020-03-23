load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

function test() {
  let strcut = ctypes.StructType("a", [ { "x": ctypes.int32_t, } ])();
  for (let arg of [1, undefined, null, false, {}, [], Symbol("foo")]) {
    assertThrowsInstanceOf(() => { struct.addressOfField(arg); },
                           Error);
  }
}

if (typeof ctypes === "object")
  test();
