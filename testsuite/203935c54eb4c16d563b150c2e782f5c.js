load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
    eval("function f1() { class c extends BaseClass { *f3(a = yield) { } } };");
    WScript.Echo('FAILED');
} catch (e) {
    if (e instanceof SyntaxError) {
        WScript.Echo('PASSED');
    } else {
        WScript.Echo('FAILED');
    }
}