load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

function test() {
  let a = ctypes.int32_t.array(10)();
  assertTypeErrorMessage(() => { let x = a[-1]; },
                          "the string \"-1\" is not a valid array index");
  assertTypeErrorMessage(() => { a[-1] = 1; },
                          "the string \"-1\" is not a valid array index");
  assertTypeErrorMessage(() => { a.addressOfElement(-1); },
                          "the number -1 is not a valid array index");

  assertRangeErrorMessage(() => { let x = a[10]; },
                          "array index 10 is out of bounds for array of length 10");
  assertRangeErrorMessage(() => { a[10] = 1; },
                          "array index 10 is out of bounds for array of length 10");
  assertRangeErrorMessage(() => { a.addressOfElement(10); },
                          "array index 10 is out of bounds for array of length 10");

  let obj = {
    toSource() {
      throw 1;
    }
  };
  assertTypeErrorMessage(() => { a.addressOfElement(obj); },
                          "<<error converting value to string>> is not a valid array index");
}

if (typeof ctypes === "object")
  test();
