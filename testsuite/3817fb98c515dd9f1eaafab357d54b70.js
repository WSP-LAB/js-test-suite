load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function test() {
    var kcngmm = function () {
    };
    var u3056 = function () {
    };
    with (u3056.__proto__ = Object.seal.bind(undefined, /x/g)) {
        (function () {
            return '';
        }());
    }
    try {
        try {
            u3056.caller = kcngmm;
        } catch (e) {
        }
        try {
            ;
        } catch (e) {
        }
    } catch (e) {
    }
}
test();
WScript.Echo("Pass");
