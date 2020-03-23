load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

WScript.LoadScriptFile("60d6ca88e7d39015a26f19fa30880ced.js");

var msgFunction = foo('World');

var msg0 = msgFunction();

WScript.SetTimeout(testFunction, 50);

/////////////////

function testFunction()
{
    telemetryLog(`msg0: ${msg0}`, true); //Hello World #0
        
    telemetryLog(`msgFunction() -- 1: ${msgFunction()}`, true); //Hello World #1
    telemetryLog(`msgFunction() -- 2: ${msgFunction()}`, true); //Hello World #2
}