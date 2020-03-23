load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6.1-1-1
description: >
    Allow reserved words as property names at object initialization,
    verified with hasOwnProperty: null, true, false
---*/

        var tokenCodes  = { 
            null: 0,
            true: 1,
            false: 2
        };
        var arr = [
            'null',
            'true',
            'false'
        ];        
        for(var p in tokenCodes) {
            for(var p1 in arr) {
                if(arr[p1] === p) {                     
                    assert(tokenCodes.hasOwnProperty(arr[p1]), 'tokenCodes.hasOwnProperty(arr[p1]) !== true');
                }
            }
        }
