load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

function test() {
  let obj = {
    toSource() {
      throw 1;
    }
  };
  assertTypeErrorMessage(() => { ctypes.double().value = obj; },
                         "can't convert <<error converting value to string>> to the type double");
}

if (typeof ctypes === "object")
  test();
