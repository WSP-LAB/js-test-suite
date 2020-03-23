load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch12/12.7/12.7-1.js
 * @description The continue Statement - a continue statement without an identifier may have a LineTerminator before the semi-colon
 */


function testcase() {
        var sum = 0;
        for (var i = 1; i <= 10; i++) {
            continue
            ;
            sum += i;
        }
        return sum === 0;
    }
runTestCase(testcase);
