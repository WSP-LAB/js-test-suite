load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var g = 1;
function test()
{
    // Bailout point 
    throw g;
}

try
{
    test()
}
catch (e)
{
    WScript.Echo(e);
}
WScript.Echo(g);
