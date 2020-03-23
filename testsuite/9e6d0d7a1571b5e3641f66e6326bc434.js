load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.match (regexp)
es5id: 15.5.4.10_A1_T3
description: Checking by using eval
---*/

var match = String.prototype.match.bind(this);

try {
    this.toString = Object.prototype.toString;
} catch (e) { ; }

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ((this.toString === Object.prototype.toString)  && //Ensure we could overwrite global obj's toString
    (match(eval("\"bj\""))[0] !== "bj")) {
  $ERROR('#1: match = String.prototype.match.bind(this); match(eval("\\"bj\\""))[0] === "bj". Actual: '+match(eval("\"bj\""))[0] );
}
//
//////////////////////////////////////////////////////////////////////////////
