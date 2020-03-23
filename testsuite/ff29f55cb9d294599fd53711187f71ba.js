load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Object is the property of global
es5id: 15.2_A1
description: Checking if Object equals to this.Object
---*/

var obj=Object;

var thisobj=this.Object;

if(obj!==thisobj){
  $ERROR('Object is the property of global');
}
