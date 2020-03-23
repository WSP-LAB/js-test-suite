load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Mapped arguments object with non-configurable property
description: >
    Mapped arguments property is changed to non-writable and
    non-configurable. Perform property attribute changes with two
    [[DefineOwnProperty]] calls. Add intervening call to
    [[DefineOwnProperty]].
flags: [noStrict]
---*/

function argumentsNonWritableThenNonConfigurableWithInterveningDefineOwnProperty(a) {
  Object.defineProperty(arguments, "0", {writable: false});
  Object.defineProperty(arguments, "0", {value: 2});
  Object.defineProperty(arguments, "0", {configurable: false});
  assert.sameValue(a, 1);
  assert.sameValue(arguments[0], 2);

  // Postcondition: Arguments mapping is removed.
  a = 3;
  assert.sameValue(a, 3);
  assert.sameValue(arguments[0], 2);
}
argumentsNonWritableThenNonConfigurableWithInterveningDefineOwnProperty(1);
