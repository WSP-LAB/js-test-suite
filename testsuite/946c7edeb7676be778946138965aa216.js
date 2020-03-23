load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var arr = new Array(10);
var newarr = arr.splice(2147483648, 2)   //2^31 

var obj = { };
obj.splice = Array.prototype.splice;
Object.prototype.splice = Array.prototype.splice;

WScript.Echo("ok");