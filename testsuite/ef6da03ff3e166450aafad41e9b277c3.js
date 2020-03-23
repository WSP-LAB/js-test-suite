load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/*
   Shadoned Evaluation
*/

function Run(){
    var x = 1;
    {
        let x = 2; 
        x; /**bp:locals();evaluate('x')**/
    }
    x; /**bp:locals()**/
	WScript.Echo('PASSED');
}

var foo = Run;

WScript.Attach(foo);
WScript.Detach(foo);
WScript.Attach(foo);

