load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

WScript.LoadScriptFile("dc12371bf414696a113c371a90d0997a.js");

var tests = [
    {
        name: 'Quantifier characters shouldn\'t be allowed on their own',
        body: function () {
            assert.throws(function () { eval('/*/'); }, SyntaxError, '/*/');
            assert.throws(function () { eval('/+/'); }, SyntaxError, '/+/');
            assert.throws(function () { eval('/?/'); }, SyntaxError, '/?/');
        }
    }
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != 'summary' });
