load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * When using property attributes, {DontEnum} is not used
 *
 * @path ch12/12.2/S12.2_A9.js
 * @description Enumerating property attributes of "this" and then searching for the declared variable
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
for (__prop in this){
    if (__prop === "__declared__var")
        enumed=true;
}
if (!(enumed)) {
	$ERROR('#1: When using property attributes, {DontEnum} not used');
}
//
//////////////////////////////////////////////////////////////////////////////

var __declared__var;

