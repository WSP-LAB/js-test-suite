load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch10/10.6/10.6-10-c-ii-1-s.js
 * @description arguments[i] remains same after changing actual parameters in strict mode
 * @onlyStrict
 */


function testcase() {
  function foo(a,b,c)
  {
    'use strict';
    a = 1; b = 'str'; c = 2.1;
    return (arguments[0] === 10 && arguments[1] === 'sss' && arguments[2] === 1);
  }
  return foo(10, 'sss', 1);
 }
runTestCase(testcase);