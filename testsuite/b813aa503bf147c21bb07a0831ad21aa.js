load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function test()
{
    var s = "1";
    for (var i = 0; i < 2; i++)
    {
        if (i == 0)
        {
            s = "1000000" + s + "1";
        }
        else 
        {
            s -= 1;
        }
    }
    WScript.Echo(s);
}
    test();
    test();
