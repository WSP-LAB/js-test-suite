load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/*
	For loop using let
*/
var x = 1;

for(let y=1;
    y<3; /**bp:locals()**/
    y++){
    const z = 1;
    z;/**bp:locals(1)**/
}
WScript.Echo('PASSED');


