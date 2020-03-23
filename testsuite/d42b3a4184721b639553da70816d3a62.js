load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function test(num) {
    var str = "";
    do
    {
        str += "0";
    } while (str.length < num);
    return str;
}

WScript.Echo(test(4));

