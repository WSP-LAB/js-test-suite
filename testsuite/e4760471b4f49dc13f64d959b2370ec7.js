load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch07/7.6/7.6.1/7.6.1-7-13.js
 * @description Allow reserved words as property names by index assignment, accessed via indexing: implements, let, private
 */


function testcase() {
        var tokenCodes = {};
        tokenCodes['implements'] = 0;
        tokenCodes['let'] = 1;
        tokenCodes['private'] = 2;     
        var arr = [
            'implements',
            'let',
            'private'
        ];
        for (var i = 0; i < arr.length; i++) {
            if (tokenCodes[arr[i]] !== i) {
                return false;
            };
        }
        return true;
    }
runTestCase(testcase);
