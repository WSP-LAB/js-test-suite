load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// VSO OS Bug 1206083
// Accessor inline cache was not invalidated after eval() function definition overwrites global accessor property with same name
function print_(x) { WScript.Echo("" + x); }
Object.defineProperty(this, "z", { get: function () { print_("getter") }, set: function () { print_("setter") }, configurable: true });
print_(z);
eval('function z(){}');
print_(z);
z = 0;
print_(z);
