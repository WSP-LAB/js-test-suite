load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 13.3.3
description: >
  Array Binding Pattern with Rest Element
info: >
  Destructuring Binding Patterns - Syntax

  ArrayBindingPattern[Yield] :
    [ Elisionopt BindingRestElement[?Yield]opt ]
    [ BindingElementList[?Yield] ]
    [ BindingElementList[?Yield] , Elisionopt BindingRestElement[?Yield]opt ]

  BindingRestElement[Yield] :
    ... BindingIdentifier[?Yield]
---*/

function fn1([...args]) {}

function fn2([,,,,,,,...args]) {}

function fn3([x, {y}, ...z]) {}

function fn4([,x, {y}, , ...z]) {}

function fn5({x: [...y]}) {}
