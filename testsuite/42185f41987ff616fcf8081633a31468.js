load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.of
description: >
  Return abrupt from object value
info: >
  22.2.2.2 %TypedArray%.of ( ...items )

  ...
  7. Repeat, while k < len
    ...
    c. Perform ? Set(newObj, Pk, kValue, true).
  ...
includes: [testTypedArray.js]
---*/

var lastValue;

var obj1 = {
  valueOf() {
    lastValue = "obj1";
    return 42;
  }
};
var obj2 = {
  valueOf() {
    lastValue = "obj2";
    throw new Test262Error();
  }
};

testWithTypedArrayConstructors(function(TA) {
  lastValue = false;

  assert.throws(Test262Error, function() {
    TA.of(obj1, obj2, obj1);
  });

  assert.sameValue(lastValue, "obj2");
});

