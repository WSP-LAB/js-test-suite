load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

WScript.LoadScriptFile("dc12371bf414696a113c371a90d0997a.js");

var tests = [
    {
        name: "MatchGroupInst should parse code-points correctly",
        body: function () {
            assert.isTrue(/(\ud800)\1/u.test("\ud800\ud800"), "Partial surrogate pair");
            assert.isTrue(/(\u{10429})\1/u.test("\u{10429}\u{10429}"), "Equal sized code-point lists in both RegExp and string to match");
            assert.isTrue(/(\u{10429}a)\1/u.test("\u{10429}a\u{10429}ab"), "Shorter code-point list in RegExp");
            assert.isFalse(/(\u{10429}a)\1/u.test("\u{10429}a\u{10429}"), "Shorter code-point list in string to match");
        }
    },
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });
