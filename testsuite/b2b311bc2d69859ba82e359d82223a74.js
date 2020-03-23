load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

if (this.WScript && this.WScript.LoadScriptFile) {
    this.WScript.LoadScriptFile("f5becff517f795f190840317867c5f83.js");
}

function foo(a)
{
    try{
        baz();
    }catch(ex){
        WScript.Echo(TrimStackTracePath(ex.stack));
    }
    try{
        baz();
    }catch(ex){
        WScript.Echo(TrimStackTracePath(ex.stack));
    }
}
foo(1);
foo(1);
foo(1.1);
