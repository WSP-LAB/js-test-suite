load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Additive/Substract Operator(A/SO) in combination with itself separated by LT or white spaces
 * after automatic semicolon insertion gives valid result
 *
 * @path ch07/7.9/S7.9_A5.9_T1.js
 * @description Try use Variable1 (different combinations of three +) Variable2 construction
 */

var x=1, y=1;
var z=
x
+
+
+
y

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ((z!==2)&&(y!==1)&&(x!==1)) {
	$ERROR('#1: ');
}
//
//////////////////////////////////////////////////////////////////////////////

z=
x + + + y

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if ((z!==2)&&(y!==1)&&(x!==1)) {
	$ERROR('');
}
//
//////////////////////////////////////////////////////////////////////////////

z=
x
+    +
+    +
y

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if ((z!==2)&&(y!==1)&&(x!==1)) {
	$ERROR('');
}
//
//////////////////////////////////////////////////////////////////////////////

