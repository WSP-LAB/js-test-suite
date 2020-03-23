load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

for (i = 0; i < 1000; i++) {
  var a = new ArrayBuffer(10000000);
  for (j = 0; j < 20; j++)   {
     var b = new Object();
  }
}
WScript.Echo("pass");