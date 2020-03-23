load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/*
    Const Reassignment from debugger
*/

let a = 1;
const b = 2;
a; /**bp:locals(1);evaluate('b++')**/
WScript.Echo(a);
WScript.Echo('PASSED');
