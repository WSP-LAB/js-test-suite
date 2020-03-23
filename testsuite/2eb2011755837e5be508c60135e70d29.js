load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("d7d7da2fe1bb153952fa646a08ffb7af.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
es5id: 12.3.2_L15
description: >
    Tests that the getter for Intl.DateTimeFormat.prototype.format
    meets the requirements for built-in objects defined by the
    introduction of chapter 17 of the ECMAScript Language
    Specification.
author: Norbert Lindenberg
includes: [testBuiltInObject.js]
---*/

testBuiltInObject(Object.getOwnPropertyDescriptor(Intl.DateTimeFormat.prototype, "format").get , true, false, [], 0);
