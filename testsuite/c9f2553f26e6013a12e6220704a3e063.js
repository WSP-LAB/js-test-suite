load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function func(f)
{
    var a = 1;
    var b = 2;
    if (f() === 1)
    {
        WScript.Echo(a);
    }
    else
    {
        WScript.Echo(b);
    }
}

function one() { return 1; }
function zero() { return 0; }


func(zero);
func(one);
