load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributor: Jason Orendorff
 */

var o = { f: function() { return o.g(); }, g: function() { return arguments.callee.caller; } };
var c = o.f();
var i = 'f';
var d = o[i]();

reportCompare(true, c === o.f && d === o.f(), "");
