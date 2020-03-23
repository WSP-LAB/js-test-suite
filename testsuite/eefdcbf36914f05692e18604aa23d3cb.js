load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var requestGlobal = WScript.LoadScriptFile("66f9ad29f1336084fc8a301aebf3fa49.js", "samethread");

// Access 'o.p' (property on the object) from a different script context
var o = [
    { p: "000" },
    { p: "001", q: 0 },
    { p: "002" },
    { p: "003", q: 0 }
];
for(var i = 0; i < o.length; ++i)
    WScript.Echo(requestGlobal.access(o[i]));

// Access 'o.p' (property on the prototype object) from a different script context
var proto = o;
o = [];
for(var i = 0; i < proto.length; ++i)
    o.push(Object.create(proto[i]));
for(var i = 0; i < o.length; ++i)
    o[i].p;
for(var i = 0; i < o.length; ++i)
    WScript.Echo(requestGlobal.access(o[i]));
