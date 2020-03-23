load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * VERTICAL TAB (U+000B) may occur within strings
 *
 * @path ch07/7.2/S7.2_A2.2_T1.js
 * @description Use VERTICAL TAB(\u000B and \v)
 */

// CHECK#1
if (eval("'\u000Bstr\u000Bing\u000B'") !== "\u000Bstr\u000Bing\u000B") {
  $ERROR('#1: eval("\'\\u000Bstr\\u000Bing\\u000B\'") === "\\u000Bstr\\u000Bing\\u000B"');
}

//CHECK#2
if (eval("'\vstr\ving\v'") !== "\vstr\ving\v") {
  $ERROR('#2: eval("\'\\vstr\\ving\\v\'") === "\\vstr\\ving\\v"');
}

