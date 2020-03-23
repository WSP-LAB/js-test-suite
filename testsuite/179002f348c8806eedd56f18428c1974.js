load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Nested function are admitted
 *
 * @path ch13/13.2/S13.2_A2_T1.js
 * @description Nesting level is two
 */

var __JEDI="jedi";

function __FUNC(){
    function __GUNC(){
        return arguments[0];
    };
    
    return __GUNC;
};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__FUNC()(__JEDI) !== __JEDI) {
	$ERROR('#1: __FUNC()(__JEDI) === __JEDI. Actual: __FUNC()(__JEDI) ==='+__FUNC()(__JEDI));
}
//
//////////////////////////////////////////////////////////////////////////////

