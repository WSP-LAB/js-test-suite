load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

assertThrowsInstanceOf(() => eval("if (1) async function foo() {}"),
                       SyntaxError);
assertThrowsInstanceOf(() => eval("'use strict'; if (1) async function foo() {}"),
                       SyntaxError);

var async = 42;
assertEq(eval("if (1) async \n function foo() {}"), 42);

if (typeof reportCompare === "function")
  reportCompare(true, true);
