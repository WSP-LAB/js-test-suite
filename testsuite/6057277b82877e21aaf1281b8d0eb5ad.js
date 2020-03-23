load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch10/10.4/10.4.2/10.4.2-3-c-2-s.js
 * @description Calling code in strict mode - eval cannot instantiate variable in the variable environment of the calling context
 * @onlyStrict
 */


function testcase() {
  var _10_4_2_3_c_2_s = 0;
  function _10_4_2_3_c_2_sFunc() {
     'use strict';
     eval("var _10_4_2_3_c_2_s = 1");
     return _10_4_2_3_c_2_s===0;
  }
  return _10_4_2_3_c_2_sFunc();
 }
runTestCase(testcase);
