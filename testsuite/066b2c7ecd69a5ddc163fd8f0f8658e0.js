load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("e7298b87458610fb43224d2d0185d930.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var BUGNUMBER = 380933;
var summary = 'Do not assert with uneval object with setter with modified proto';

printBugNumber(BUGNUMBER);
printStatus (summary);

var f = (function(){});
var y =
  Object.defineProperty({}, "p",
  {
    get: f,
    enumerable: true,
    configurable: true
  });
f.__proto__ = [];
uneval(y);

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("Tests complete");

