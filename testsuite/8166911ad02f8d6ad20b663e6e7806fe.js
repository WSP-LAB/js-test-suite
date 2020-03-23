load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

function strict() { 'use strict'; return this; }
function lenient() { return this; }
var obj = {};

assertEq(strict.bind(true)(), true);
assertEq(strict.bind(42)(), 42);
assertEq(strict.bind("")(), "");
assertEq(strict.bind(null)(), null);
assertEq(strict.bind(undefined)(), undefined);
assertEq(strict.bind(obj)(), obj);

assertEq(lenient.bind(true)() instanceof Boolean, true);
assertEq(lenient.bind(42)() instanceof Number, true);
assertEq(lenient.bind("")() instanceof String, true);
assertEq(lenient.bind(null)(), this);
assertEq(lenient.bind(undefined)(), this);
assertEq(lenient.bind(obj)(), obj);

reportCompare(true, true);
