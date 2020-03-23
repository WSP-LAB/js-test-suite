load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// validation of the bug : 301517

var P = function () {
    this.top = 1; /**bp:evaluate('JSON.stringify(this);')**/
    this.bottom = 2;
};

function run() {
    var obj1 = new P();
    var obj2 = new P();
    var obj2 = new P();
}
run();
WScript.Attach(run);
WScript.Detach(run);
WScript.Echo("Pass");
