load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var seconds = 0;
function finish() {
    print('pass');
    if (++seconds < 65) {
        WScript.SetTimeout(finish, 1000);
    }
}
WScript.SetTimeout(finish, 1000);
