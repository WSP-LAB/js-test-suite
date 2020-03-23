load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch07/7.8/7.8.5/7.8.5-1.js
 * @description Literal RegExp Objects - SyntaxError exception is thrown if the RegularExpressionNonTerminator position of a RegularExpressionBackslashSequence is a LineTerminator.
 */


function testcase() {
        try {
            eval("var regExp = /\\\rn/;");
            return false;
        } catch (e) {
            return e instanceof SyntaxError;
        }
    }
runTestCase(testcase);