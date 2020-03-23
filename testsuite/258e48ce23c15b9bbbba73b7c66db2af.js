load("201224b0d1c296b45befd2285e95dd42.js");
"use strict";
load("19d7bc83becec11ee32c3a85fbc4d93d.js");
assertThrowsInstanceOf(function () {
    eval("(function (...arguments) {})");
}, SyntaxError);
assertThrowsInstanceOf(function () {
    eval("(function (...eval) {})");
}, SyntaxError);
