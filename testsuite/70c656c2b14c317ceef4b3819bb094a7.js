load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function test(arg) {
    var x =  String.fromCharCode(arg).charCodeAt();
    WScript.Echo(x);
}

test(0);
var charCode = 0xFFFC;

for(var i = 0; i < 10; i++){
    test(charCode);
    charCode++;
}
