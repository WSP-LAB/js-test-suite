load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Crashes without the fix for bug 503565.
function f() {}
function g() {}
function h() {
    g()
}
(function() {
    eval("\
        \"use strict\";\
        g = (function(x) {\
            +Math.log(+Math.log((+(+x>0)), f(Math.log())))\
        })\
    ")
})()
for (var j = 0; j < 999; j++) {
    h()
}
