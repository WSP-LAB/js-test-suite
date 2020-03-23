load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("67475d6f299e80572167f8e325dacbed.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.4-4-44
description: >
    Object.getOwnPropertyNames - own index properties of String object
    are pushed into the returned Array
includes: [compareArray.js]
---*/

  var str = new String("abc");
  str[5] = "de";

  var expected = ["0", "1", "2", "5", "length"];
  var actual = Object.getOwnPropertyNames(str);

assert(compareArray(actual, expected), 'compareArray(actual, expected) !== true');
