load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    This test should be run without any built-ins being added/augmented.
    The name JSON must be bound to an object.
    Section 15 says that every built-in Function object described in this
    section � whether as a constructor, an ordinary function, or both � has
    a length property whose value is an integer. Unless otherwise specified,
    this value is equal to the largest number of named arguments shown in
    the section headings for the function description, including optional
    parameters.
    This default applies to JSON.parse, and it must exist as a function
    taking 2 parameters.
es5id: 15.12.2-0-2
description: JSON.parse must exist as a function taking 2 parameters
---*/

  var f = JSON.parse;

assert.sameValue(typeof(f), "function", 'typeof(f)');
assert.sameValue(f.length, 2, 'f.length');
