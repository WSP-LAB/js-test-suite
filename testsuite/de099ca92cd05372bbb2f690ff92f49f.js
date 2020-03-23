load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Test the first argument(target) of Object.Assign(target,...sources),
             if target is Symbol,the return value should be a new Symbol object whose [[SymbolData]] value is target.
es6id:  19.1.2.1.1
---*/

var target = Symbol('foo');
var result = Object.assign(target,{a:1});

assert.sameValue(typeof result, "object", "Return value should be a symbol object.");
assert.sameValue(result.toString(), "Symbol(foo)", "Return value should be 'Symbol(foo)'.");
