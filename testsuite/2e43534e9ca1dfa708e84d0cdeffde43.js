load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/*
fabs from ucrtbase.dll doesn't restore the FPU Control word correctly when passed a NaN. 
This is exposed if we WScript.LoadScriptFile() code with Math.Abs(NaN) in it. 
Causing an assertion failure in SmartFPUControl. The change special-handles NaN without calling fabs
*/
WScript.LoadScriptFile("552a69eaf3060f76b715729e4b1355e5.js");
WScript.LoadScriptFile("ccf25b09efce4c9bae702fc3fcb253db.js");
WScript.Echo('PASS');




