load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function print_(x) { WScript.Echo(x+''); }

const f = 'const f';
let g = 'let g';

eval("if (false) { function f() { } }");
eval("if (true) { function g() { } }");


print_(f);
print_(g);

function h(global) { }
eval("function h(ineval) { }");

print_(h);

{
    function i(globalblock) { }
    eval("function i(ineval) { }");
    print_(i);
}
print_(i);

function j(global) { }

{
    function j(globalblock) { }
    eval("function j(ineval) { }");
    print_(j);
}
print_(j);

