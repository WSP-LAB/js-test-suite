load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * Refer 11.1.5; 
 *   The production
 *      PropertyNameAndValueList :  PropertyNameAndValueList , PropertyAssignment
 *    4. If previous is not undefined then throw a SyntaxError exception if any of the following conditions are true
 *      a. This production is contained in strict code and IsDataDescriptor(previous) is true and IsDataDescriptor(propId.descriptor) is true
 *
 * @path ch11/11.1/11.1.5/11.1.5_4-4-a-2.js
 * @description Object literal - Duplicate data property name allowed if not in strict mode
 */


function testcase() {
  
  eval("({foo:0,foo:1});");
  return true;
  }
runTestCase(testcase);