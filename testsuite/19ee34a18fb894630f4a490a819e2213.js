load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

WScript.LoadScriptFile("dc12371bf414696a113c371a90d0997a.js");

var tests = [
    {
        name: "Object.setPrototypeOf(proxy), setPrototypeOf trap returns false",
        body() {
            var called = false;
            var proxy = new Proxy({}, { setPrototypeOf() { called = true; return false; } });

            assert.throws(() => Object.setPrototypeOf(proxy, {}), TypeError, "expected TypeError", "Proxy trap `setPrototypeOf` returned false");
            assert.areEqual(true, called, "`setPrototypeOf` trap was called");
        }
    },
    {
        name: "Assignment to proxy.__proto__, setPrototypeOf trap returns false",
        body() {
            var called = false;
            var proxy = new Proxy({}, { setPrototypeOf() { called = true; return false; } });

            assert.throws(() => proxy.__proto__ = {}, TypeError, "expected TypeError", "Proxy trap `setPrototypeOf` returned false");
            assert.areEqual(true, called, "`setPrototypeOf` trap was called");
        }
    }
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });
