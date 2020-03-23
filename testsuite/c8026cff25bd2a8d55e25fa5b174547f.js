load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// blue 238991

var g_n = 0;

function test() {
    var f = new Function("return " + g_n++);
    f();
    /**bp:locals()**/
}

WScript.Attach(test);
WScript.Detach(test);

WScript.Echo("pass");