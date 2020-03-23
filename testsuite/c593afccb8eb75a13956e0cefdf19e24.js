load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

OldObject = Object;
Object = function()
{
    this.hello = "yay";
}

var o = new Object();
WScript.Echo(o.hello);

var o2 = { hello2 : "yay2" }

WScript.Echo(o2.hello);
WScript.Echo(o2.hello2);
