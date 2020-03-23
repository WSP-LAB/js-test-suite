load("924921a1ecafccfb4db6dd25ea7b14f2.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Promise prototype object is an ordinary object
es6id: S25.4.5_A2.1_T1
author: Sam Mikes
description: Promise prototype is a standard built-in Object
---*/

if (!(Promise.prototype instanceof Object)) {
    $ERROR("Expected Promise.prototype to be an Object");
}

