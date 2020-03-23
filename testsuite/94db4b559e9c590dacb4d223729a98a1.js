load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function print_(x) { WScript.Echo(x+""); }

var inFunctionTests =
[
// eval gets scope for let/const variables => they do not leak out, no redeclaration error with vars
    function () {
        var x = 1;
        eval("let x = 2;");
        print_(x);
    },
    function () {
        var x = 1;
        eval("const x = 2;");
        print_(x);
    },
    function () {
        eval("let x = 2;");
        var x = 1;
        print_(x);
    },
    function () {
        eval("const x = 2;");
        var x = 1;
        print_(x);
    },
// var leaks out of eval in non-strict mode => redeclaration error with let/consts
    function () {
        let x = 1;
        eval("var x = 2;");
        print_(x);
    },
    function () {
        const x = 1;
        eval("var x = 2;");
        print_(x);
    },
    function () {
        eval("var x = 2;");
        let x = 1;
        print_(x);
    },
    function () {
        eval("var x = 2;");
        const x = 1;
        print_(x);
    },
];

for (let i = 0; i < inFunctionTests.length; i++)
{
    try {
        inFunctionTests[i]();
    } catch (e) {
        print_(e);
    }
}


// global tests

// eval gets scope for let/const variables => they do not leak out, no redeclaration error with vars
var a = 1;
eval("let a = 2;");
print_(a);

var b = 1;
eval("const b = 2;");
print_(b);

eval("let c = 2;");
var c = 1;
print_(c);

eval("const d = 2;");
var d = 1;
print_(d);

// var leaks out of eval in non-strict mode => redeclaration error with let/consts
let e = 1;
try { eval("var e = 2;"); print_(e); } catch (e) { print_(e); }

const f = 1;
try { eval("var f = 2;"); print_(f); } catch (e) { print_(e); }

var hadException = false;
try { eval("var g = 2;"); } catch (e) { print_(e); hadException = true; }
let g = 1;
if (!hadException) print_(g);

hadException = false;
try { eval("var h = 2;"); } catch (e) { print_(e); hadException = true; }
const h = 1;
if (!hadException) print_(h);
