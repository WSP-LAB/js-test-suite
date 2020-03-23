load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function test0(){
    switch(1) {
      case 2147483647: 
        break;
      case 2: 
        break;
      case 1: 
        break;
      case -2147483648: 
        break;
    }
  
};

// generate profile
test0(); 
test0(); 
WScript.Echo("PASSED");

