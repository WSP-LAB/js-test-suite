load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function check(cond, test)
{
    if(!cond)
    {
        WScript.Echo("Failed test: " + test);
    }
}

var f = new Boolean(false);

check( (f==false), "f equals false");
check( (f!==false), "f strict-not-equals false");
check( (!f==false), "!f equals false");

WScript.Echo("done");
