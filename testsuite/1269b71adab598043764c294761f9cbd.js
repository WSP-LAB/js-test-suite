load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Bug : 291582
// Validation that activation object scope, due to eval, will not mess up the variable visibility.

var a = 1;
{
    let a = 2;
    eval("");
}
var x = 10; /**bp:locals()**/

WScript.Echo("Pass");
