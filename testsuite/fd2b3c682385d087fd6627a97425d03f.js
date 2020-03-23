load("201224b0d1c296b45befd2285e95dd42.js");
// code in arrow function default arguments is strict if arrow is strict

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

assertThrowsInstanceOf(
    () => Function("'use strict'; (a = function (obj) { with (obj) f(); }) => { }"),
    SyntaxError);

assertThrowsInstanceOf(
    () => Function("'use strict'; (a = obj => { with (obj) f(); }) => { }"),
    SyntaxError);
