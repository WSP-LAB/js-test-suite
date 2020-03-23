load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * VERTICAL TAB (U+000B) may occur within strings
 *
 * @path ch07/7.2/S7.2_A2.2_T2.js
 * @description Use real VERTICAL TAB
 */

//CHECK#1
if ("string" !== "\u000Bstr\u000Bing\u000B") {
  $ERROR('#1: "string" === "\\u000Bstr\\u000Bing\\u000B"');
}

