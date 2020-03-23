load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

WScript.LoadScriptFile("dc12371bf414696a113c371a90d0997a.js");

var tests = [
    {
        name: "Case-folding should be applied for octoquad identifiers when the unicode flag is present",
        body: function () {
            assert.isTrue(/ABCKABC\u212a|akcabbck/giu.test('abckabck'))
        }
    },
    {
        name: "Case-folding should NOT be applied for octoquad identifiers when the unicode flag is NOT present",
        body: function () {
            assert.isFalse(/ABCKABC\u212a|akcabbck/gi.test('abckabck'))
        }
    },
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });
