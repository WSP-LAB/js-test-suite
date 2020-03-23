load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

if (true) 
{
    const c = 1;
    WScript.Echo(c);
}

WScript.Echo((function(x) {
    let y = arguments;
    return y;
})(1)[0]);

let a = 'a';
(function(a) { WScript.Echo(a) })();
WScript.Echo(a);