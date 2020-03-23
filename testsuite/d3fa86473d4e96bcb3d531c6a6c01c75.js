load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Block within a "for-in" Expression is not allowed
 *
 * @path ch12/12.6/12.6.4/S12.6.4_A15.js
 * @description Using block within "for-in" Expression
 * @negative
 */

var __arr=[1,2,3];

//////////////////////////////////////////////////////////////////////////////
//CHECK#
for(x in {__arr}){
   break ;
};
//
//////////////////////////////////////////////////////////////////////////////

