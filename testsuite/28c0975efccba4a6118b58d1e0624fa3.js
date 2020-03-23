load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Test function names showed in stack trace.
//

function Dump(output) {
    if (this.WScript) {
        WScript.Echo(output);
    } else {
        alert(output);
    }
}

if (this.WScript && this.WScript.LoadScriptFile) {
    this.WScript.LoadScriptFile("f5becff517f795f190840317867c5f83.js");
}

try {
    var foo = function() {
        throw new Error("My Error!");
    };

    function func(){
        foo();
    }

    var constructed = new Function("func();");

    function bar(){
        (function(){
            eval("constructed();");
        })();
    }

    bar();

} catch(e) {
    Dump(TrimStackTracePath(e.stack));
}
