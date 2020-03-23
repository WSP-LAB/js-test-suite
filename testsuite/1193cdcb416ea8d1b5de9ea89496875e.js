load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function print_(x) { WScript.Echo(x+''); }

Object.defineProperty(this, 'x', { configurable: true, get: function () { return undefined; } });

let x = 'let x';

Object.defineProperty(this, 'x', { value: 10 });

var desc = Object.getOwnPropertyDescriptor(this, 'x');

print_(x);

for (var p in desc)
{
    print_(p + ": " + desc[p]);
}

