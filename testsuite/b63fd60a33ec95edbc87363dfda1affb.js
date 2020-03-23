load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function test0(a) {
    return new Cons(a);

    function Cons(a) {
        this.a = (a << 1) + 2;
    }
}
WScript.Echo(test0(0x3fffffff).a);

function test1(a) {
    return new Cons(a);

    function Cons(a) {
        return { a: (a << 1) + 2 };
    }
}
WScript.Echo(test0(0x3fffffff).a);
