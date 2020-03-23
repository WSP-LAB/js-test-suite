load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

WScript.LoadScriptFile("3b898cdbe70433a5e07fa3a546b8539c.js", "self");

CompoundString.createTestStrings(); // call twice so that it is jitted the second time
var strings = CompoundString.createTestStrings();
for(var i = 0; i < strings.length; ++i)
    WScript.Echo(i + ": " + strings[i]);
