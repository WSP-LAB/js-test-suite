load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

WScript.LoadScriptFile("dc12371bf414696a113c371a90d0997a.js");

function foo() {
  function bar() {
    eval('[a] = this;');
  }
  let a;
  bar();
}
assert.throws(function () { foo(); }, ReferenceError, "Invalid assignment to array throws runtime reference error when destructuring is disabled", "Invalid left-hand side in assignment");

WScript.Echo("PASS");
