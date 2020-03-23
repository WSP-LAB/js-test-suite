load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

echo(new RegExp("", "mig").toString());
echo(new RegExp("/").toString());
echo(new RegExp("\\/").toString());
echo(new RegExp("\\\\/").toString());
echo(new RegExp("\\\\\\//").toString());
echo(new RegExp("\n").toString());
echo(new RegExp("\\\n").toString());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var web;
function echo(o) {
    if (web)
        document.write(o + "<br/>");
    else {
        try {
            WScript.Echo("" + o);
        } catch (ex) {
            print("" + o);
        }
    }
}
