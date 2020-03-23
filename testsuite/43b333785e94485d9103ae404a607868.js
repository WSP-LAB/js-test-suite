load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Number instances have no special properties beyond those
    inherited from the Number prototype object
es5id: 15.7.5_A1_T06
description: Checking property toExponential
---*/

//CHECK#1
if((new Number()).hasOwnProperty("toExponential") !== false){
  $ERROR('#1: Number instance must have no special property "toExponential"');
}

//CHECK#2
if((new Number()).toExponential !== Number.prototype.toExponential){
  $ERROR('#2: Number instance property "toExponential" must be inherited from Number prototype object');
}
