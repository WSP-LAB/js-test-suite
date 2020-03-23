load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("41e6217a79cd5540df13626a4eafe149.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

assertThrowsInstanceOf(() => eval("if (1) function* foo() {}"),
                       SyntaxError);
assertThrowsInstanceOf(() => eval("'use strict'; if (1) function* foo() {}"),
                       SyntaxError);

if (typeof reportCompare === "function")
  reportCompare(true, true);
