load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If ToBoolean(x) is false, return x
 *
 * @path ch11/11.11/11.11.1/S11.11.1_A3_T3.js
 * @description Type(x) and Type(y) vary between primitive string and String object
 */

//CHECK#1
if (("" && "1") !== "") {
  $ERROR('#1: ("" && "1") === ""');
}

//CHECK#2
if (("" && new String("1")) !== "") {
  $ERROR('#2: ("" && new String("1")) === ""');
}

