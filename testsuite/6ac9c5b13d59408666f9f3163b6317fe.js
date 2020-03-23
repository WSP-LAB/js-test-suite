load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var CrossContextSpreadTestFunction = this.WScript.LoadScriptFile("3c81b68d0e11f02a3dd4178e5a3e17f9.js", "samethread");
var CrossContextSpreadArguments = this.WScript.LoadScriptFile("d538d1b7a74d3bdc4738ad3e61e9c9c2.js", "samethread");

CrossContextSpreadTestFunction.foo(...CrossContextSpreadArguments.a);