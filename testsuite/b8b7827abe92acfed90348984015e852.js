load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2011 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 13.1
description: >
    dynamic lookup from closure
---*/
function fn(one) {
  var x = one + 1;
  let y = one + 2;
  const u = one + 4;
  {
    let z = one + 3;
    const v = one + 5;
    function f() {
      assert.sameValue(one, 1);
      assert.sameValue(x, 2);
      assert.sameValue(y, 3);
      assert.sameValue(z, 4);
      assert.sameValue(u, 5);
      assert.sameValue(v, 6);
    }

    f();
  }
}
fn(1);

