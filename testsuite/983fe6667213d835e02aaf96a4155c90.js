load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * {} within the "if" expression is not allowed
 *
 * @path ch12/12.5/S12.5_A11.js
 * @description Checking if execution of "if({1})" fails
 * @negative
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#
if({1})
  {
    ;
  }else
  {
    ;
  }
//
//////////////////////////////////////////////////////////////////////////////

