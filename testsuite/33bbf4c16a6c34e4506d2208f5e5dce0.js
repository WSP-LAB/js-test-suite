load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Test the first argument(target) of Object.Assign(target,...sources),
             if target is null,Should Throw a TypeError exception.
es6id:  19.1.2.1.1
---*/

assert.throws(TypeError, function(){Object.assign(null, {a:1});});
