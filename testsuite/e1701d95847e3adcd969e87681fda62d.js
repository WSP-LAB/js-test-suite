load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Win8 867346: Bad continue wasn't detected by deferred parsing.
//

function f() {
    LABEL1:
    switch(0) {
        case 0:
            continue LABEL1;
    }
}

