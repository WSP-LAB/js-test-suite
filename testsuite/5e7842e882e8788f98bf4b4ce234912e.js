load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

WScript.LoadScriptFile("7048611f2584694b279b34ff324671af.js");

var tests = [
  {
    name: "OS4497597: ScopeInfo::FromScope() should increment scope symbol count to accomodate 'new.target'",
    body: function () {
        (function (){
            function f() {}
            eval("");
            () =>new.target;
        })();
        // Repro:
        // ASSERTION : (jscript\core\lib\Runtime\ByteCode\ScopeInfo.h, line 68)
        // Failure: (i >= 0 && i < symbolCount)
    }
  },
  {
    name: "OS5427497: Parser mistakes 'new.target' as in global function under -forceundodefer",
    body: function () {
        new.target;  // bug repro: SyntaxError: Invalid use of the 'new.target' keyword
    }
  },
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });
