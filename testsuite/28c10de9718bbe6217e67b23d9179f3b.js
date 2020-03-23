load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(v) { WScript.Echo(v + ""); }

var x = "global.x";
var o = { x : "object.x" }

function foo(a) {
    var str = "In foo: " + a + ". this.x: " + this.x + " type: " + typeof(this);
    write(str);
    return str;
}

foo.call(this, 2);

foo.call();
foo.call(0);
foo.call(void 0);
foo.call()===foo.call(0);
write(foo.call()===foo.call(void 0));

foo.apply();
foo.apply(0);
foo.apply(void 0);
foo.apply()===foo.apply(0);

write(foo.apply()===foo.apply(void 0));
