load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
// Contributor: Andreas Gal <gal@uci.edu>

assertEq(Object.getOwnPropertyNames(Array.prototype).indexOf("length") >= 0, true);

reportCompare("ok", "ok", "bug 583429");
