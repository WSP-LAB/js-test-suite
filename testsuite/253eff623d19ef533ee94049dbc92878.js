load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/// <reference path="../UnitTestFramework/UnitTestFramework.js" />
if (this.WScript && this.WScript.LoadScriptFile) { // Check for running in ch
    this.WScript.LoadScriptFile("dc12371bf414696a113c371a90d0997a.js");
}

[
    (-1 >>> 0) + 1,
    (-1 >>> 0) + 2,
    Infinity,
].forEach(function(len) {
    assert.throws(function() {
        new Uint8Array(len);
    }, RangeError);

    assert.throws(function() {
        new Uint8Array({length: len});
    }, RangeError);
});

print("pass");
