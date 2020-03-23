load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * When the [[Delete]] method of O is called with property name P,
 * and If the property has the DontDelete attribute, return false
 *
 * @path ch08/8.12/8.12.7/S8.12.7_A1.js
 * @description Try to delete Math.E, that has the DontDelete attribute
 * @noStrict
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (delete Math.E !== false){
  $ERROR('#1: delete Math.E === false. Actual: ' + (delete Math.E));
};
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (Math.E === undefined){
  $ERROR('#2: delete Math.E; Math.E !== undefined');
};
//
//////////////////////////////////////////////////////////////////////////////


