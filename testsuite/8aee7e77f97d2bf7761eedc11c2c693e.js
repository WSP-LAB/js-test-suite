load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var w;
function RunTest()
{
    var x = "Left" + "Dead";
    var y;
    if (x) {
        y = x;
        x = x + " ZOMBIE";
    }
    w = x + " ALIVE!";
    return y + "";
}
var res = RunTest();
if (res !== "LeftDead")
{
    WScript.Echo(res);
    WScript.Echo("FAILED");
}
else
{
    WScript.Echo("Passed");
}

