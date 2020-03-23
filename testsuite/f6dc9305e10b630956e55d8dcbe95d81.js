load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------




var x = 4;

Object.defineProperty(this, "x", { writable: false });

x = 3;
WScript.Echo(x);
var x = 5;
WScript.Echo(x);
