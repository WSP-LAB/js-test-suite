load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

WScript.LoadScriptFile("dc12371bf414696a113c371a90d0997a.js");

function testRelationalComparison (retVal)
{
    var ObjectV = function ObjectV(v){ }

    ObjectV.prototype = {
        valueOf : function(){ return retVal; }
    };

    function f()
    {
        var x = new ObjectV(0);
        x<"1";
    }

    f();
    f();
    f();
}

testRelationalComparison(null);
testRelationalComparison(undefined);
assert.throws(function() { testRelationalComparison(Symbol("abc")); }, TypeError, "Number expected");

WScript.Echo("Passed");
