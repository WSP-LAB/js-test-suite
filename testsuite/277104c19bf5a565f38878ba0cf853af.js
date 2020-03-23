load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function mainFunc(inName) {
  for (i in this) {
    if (i == inName) {
       WScript.Echo("PASS");
    }
  }
}

mainFunc.one = 20;
child = WScript.LoadScriptFile("1d36ec3cdbbdceed8b4c2e5d759a5bdd.js", "samethread");
childFunc = child.setupFunc(mainFunc);
childFunc();