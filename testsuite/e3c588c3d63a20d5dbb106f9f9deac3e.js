load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.substring (start, end)
es5id: 15.5.4.15_A1_T11
description: >
    Arguments are objects, and instance is string, objects have
    overrided valueOf function, that return exception
---*/

var __obj = {valueOf:function(){throw "instart";}};
var __obj2 = {valueOf:function(){throw "inend";}};
var __str = "ABB\u0041BABAB";

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
        try {
          var x = __str.substring(__obj,__obj2);
          $ERROR('#1: "var x = __str.substring(__obj,__obj2)" lead to throw exception');
        } catch (e) {
          if (e!=="instart") {
            $ERROR('#1.1: Exception === "instart". Actual: '+e);
          }
        }
//
//////////////////////////////////////////////////////////////////////////////