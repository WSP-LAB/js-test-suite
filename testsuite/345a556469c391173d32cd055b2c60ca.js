load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * For the keyword null the typeof operator returns the "object"
 * See also
 * http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Operators:Special_Operators:typeof_Operator
 * and
 * http://bugs.ecmascript.org/ticket/250
 * for example
 *
 * @path ch08/8.2/S8.2_A3.js
 * @description Check type of null
 */

//////////////////////////////////////////////////////////////
// CHECK#1
if (typeof(null) !== "object") {
  $ERROR('#1: typeof null === "object". Actual: ' + (typeof null));
}
//
/////////////////////////////////////////////////////////////

