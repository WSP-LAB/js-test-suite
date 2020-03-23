load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function print_(value)
{
    WScript.Echo(value);
}

//
// Verify type promotion by creating two types, then adding similar named fields in a different
// order.  This will verify that the slot indices don't collide between promotions.
//

var o1 = {},o2 = {};

o1.x = "A";
o1.y = "B";

o2.y = "C";
o2.x = "D";

print_(o1.x);
print_(o1.y);
print_(o2.x);
print_(o2.y);
