load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6.1-5-4
description: >
    Allow reserved words as property names at object initialization,
    accessed via indexing: new, var, catch
---*/

        var tokenCodes  = { 
            new: 0,
            var: 1,
            catch: 2
        };
        var arr = [
            'new', 
            'var', 
            'catch'
        ]; 
        for (var i = 0; i < arr.length; i++) {
            assert.sameValue(tokenCodes[arr[i]], i, 'tokenCodes[arr[i]]');
        }
