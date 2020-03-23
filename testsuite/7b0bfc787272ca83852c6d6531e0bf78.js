load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 13.3.3
description: >
  Recursive array and object binding patterns
info: >
  Destructuring Binding Patterns - Syntax

  BindingPattern[Yield] :
    ObjectBindingPattern[?Yield]
    ArrayBindingPattern[?Yield]
---*/

function fn1([{}]) {}

function fn2([{a: [{}]}]) {}

function fn3({a: [,,,] = 42}) {}

function fn4([], [[]], [[[[[[[[[x]]]]]]]]]) {}

function fn4([[x, y, ...z]]) {}
