load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
// |reftest| fails-if(!xulRuntime.shell)
/* -*- Mode: C++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

var sandbox = evalcx('');
var foreign = evalcx('({ get f() { return this; }, set x(v) { result = this } })', sandbox);
var local = Object.create(foreign);

reportCompare(local, local.f, "this should be set correctly in getters");
local.x = 42;
reportCompare(local, sandbox.result, "this should be set correctly in setters");
