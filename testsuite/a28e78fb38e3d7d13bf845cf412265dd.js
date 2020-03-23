load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.from
description: >
  Assert mapfn `this` without thisArg
info: >
  22.2.2.1 %TypedArray%.from ( source [ , mapfn [ , thisArg ] ] )

  ...
  5. If thisArg was supplied, let T be thisArg; else let T be undefined.
  ...
  10. Repeat, while k < len
    ...
    c. If mapping is true, then
      i. Let mappedValue be ? Call(mapfn, T, « kValue, k »).
  ...
includes: [testTypedArray.js]
flags: [onlyStrict]
---*/

var source = [42, 43];

testWithTypedArrayConstructors(function(TA) {
  var results = [];
  var mapfn = function() {
    results.push(this);
  };

  TA.from(source, mapfn);

  assert.sameValue(results.length, 2);
  assert.sameValue(results[0], undefined);
  assert.sameValue(results[1], undefined);
});
