load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("a933351025cd04d593f2b4eef938c419.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributor: Blake Kaplan
 */

//-----------------------------------------------------------------------------
var BUGNUMBER = 566651;
var summary = 'setting array.length to null should not throw an uncatchable exception';
var actual = 0;
var expect = 0;

printBugNumber(BUGNUMBER);
printStatus (summary);

var a = [];
a.length = null;

reportCompare(expect, actual, summary);
