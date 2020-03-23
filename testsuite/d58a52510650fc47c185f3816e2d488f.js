load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function f(...arguments) {
  return Array.isArray(arguments);
}
assertTrue(f());

function g({arguments}) {
  return arguments === 42;
}
assertTrue(g({arguments: 42}));

function foo() {
  let arguments = 2;
  return arguments;
}
assertEquals(2, foo());

assertThrows(function(x = arguments, arguments) {}, ReferenceError);
