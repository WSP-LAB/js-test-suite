load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------



function test(param)
{
    var f;

    {
        let x = param + "str";
        f = function() { return x; }
    }
    return f();
}


WScript.Echo(test("test1"));
WScript.Echo(test("test2"));


