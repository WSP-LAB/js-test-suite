load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function print_(x) { WScript.Echo(x+''); }

function filter(name) {
    return /^[a-z]$/.test(name) || /^shadow_(let|const)$/.test(name);
}

print_('\n==== Basic let and const variables at global scope ====\n');
// Since the let/const globals are implemented as special properties
// in the [Simple]DictionaryTypeHandler, try out the other types of
// global properties to sanity check that they are still property-
// like (on global object, enumerable)

var      a = 'global var a';
         b = 'global undecl b';
let      c = 'global let c';
const    d = 'global const d';
function e () { }

print_('\nNaked references\n');

print_(a);
print_(b);
print_(c);
print_(d);
print_(e);

print_('\nthis. references\n');

print_(this.a);
print_(this.b);
print_(this.c);
print_(this.d);
print_(this.e);

print_('\nfor-in enumeration of this\n');

for (let p in this)
{
    if (filter(p))
    {
        print_(p + ': ' + this[p]);
    }
}

