load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

WScript.Echo("Basic string concatenation, II.");

function f(x,y)
{
    return x + "." + y;
}

var str = "-";
for(var i = 0; i < 10; ++i)
{
    str = f(i,f(str, i));
}

WScript.Echo(str);
