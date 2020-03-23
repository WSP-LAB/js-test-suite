load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var a = new Object;
a.push = function(i)
{
    for(__i = 0; __i < 1; ++__i)
        WScript.Echo("Pass")
};
a.push(1)
