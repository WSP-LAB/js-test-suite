load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * NonEscapeSequence is not EscapeCharacter
 *
 * @path ch07/7.8/7.8.4/S7.8.4_A4.3_T7.js
 * @description EscapeCharacter :: SingleEscapeCharacter :: one of b f n r t v
 */

//CHECK#bfnrtv
if ("b" === "\b") {
  $ERROR('#b');
}

if ("f" === "\f") {
  $ERROR('#f');
}

if ("n" === "\n") {
  $ERROR('#n');
}

if ("r" === "\r") {
  $ERROR('#r');
}

if ("t" === "\t") {
  $ERROR('#t');
}

if ("v" === "\v") {
  $ERROR('#v');
}


