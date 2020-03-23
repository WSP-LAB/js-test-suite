load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

this.x = 'global x';
WScript.Echo(x);
delete x;
WScript.Echo(this.x);

this.y = 'global y';
WScript.Echo(y);
delete y;
WScript.Echo(this.y);

WScript.LoadScriptFile("4b5c67737a795a75779bf55fb2d84db8.js");
