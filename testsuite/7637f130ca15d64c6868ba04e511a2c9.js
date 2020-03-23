load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Test throw from dynamic script.
//

function Dump(output)
{
    if (this.WScript)
    {
        WScript.Echo(output);
    }
    else
    {
        alert(output);
    }
}

function runtest()
{
    try {
        (function () {
            var f = new Function("function foo(){ throw new Error('This is my error'); } foo();");
            f();
        })();
    } catch(e) {
        Dump(TrimStackTracePath(e.stack));
    }
}

if (this.WScript && this.WScript.LoadScriptFile) {
    this.WScript.LoadScriptFile("f5becff517f795f190840317867c5f83.js");
}

runtest();