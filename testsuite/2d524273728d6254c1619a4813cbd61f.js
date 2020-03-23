load("201224b0d1c296b45befd2285e95dd42.js");
var COUNT = 9;
eval("'use strict'; for (let j = 0; j < COUNT; j++); try { x; throw new Error(); } catch (e) { if (!(e instanceof ReferenceError)) throw e; }");
assertEq(typeof j, "undefined");
