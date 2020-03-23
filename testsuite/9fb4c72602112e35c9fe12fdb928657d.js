load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function test0(o, p) {
        o[p] = "set";
    }
    var p = 0;
    var o = [];
    var o2 = [];
    Object.prototype[p] = null;
    test0(o, p);
    WScript.Echo(o[p]);
    Object.defineProperty(Object.prototype, p, { configurable: true, enumerable: true, writable: false, value: null });
    test0(o2, p);
    WScript.Echo(o2[p]);

