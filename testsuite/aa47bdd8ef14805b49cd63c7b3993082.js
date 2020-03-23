load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributors: Gary Kwong and Jason Orendorff
 */

var savedEval = eval;
var x = [0];
eval();

x.__proto__ = this;  // x has non-dictionary scope
try {
    DIE;
} catch(e) {
}

delete eval;  // force dictionary scope for global
gc();
eval = savedEval;
var f = eval("(function () { return /x/; })");
x.watch('x', f);  // clone property from global to x, including SPROP_IN_DICTIONARY flag

reportCompare("ok", "ok", "bug 533876");
