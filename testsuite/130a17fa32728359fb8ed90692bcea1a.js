load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Refer 11.1.5; 
    The production
    PropertyAssignment : get PropertyName ( ) { FunctionBody } 
    3.Let desc be the Property Descriptor{[[Get]]: closure, [[Enumerable]]: true, [[Configurable]]: true}
es5id: 11.1.5_6-3-2
description: >
    Object literal - property descriptor for get property assignment
    should not create a set function
---*/

  var o;
  eval("o = {get foo(){return 1;}};");
  var desc = Object.getOwnPropertyDescriptor(o,"foo");

assert.sameValue(desc.set, undefined, 'desc.set');
