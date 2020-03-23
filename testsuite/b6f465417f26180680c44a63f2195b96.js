load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function foo() {
  var a = new Int8Array(500);
  for(var i = 500; i < 1000; ++i) {
    a[i] = 0;
  }
}

foo();
foo();
WScript.Echo("PASSED");