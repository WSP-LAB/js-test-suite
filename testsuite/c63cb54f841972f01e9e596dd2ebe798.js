load("201224b0d1c296b45befd2285e95dd42.js");
"use strict";
var obj = {};
Object.defineProperty(obj, "test", {configurable: false, writable: false, value: "hey"});
Object.defineProperty(obj, "test", {configurable: false, writable: false});

var wrapper = new Proxy(obj, {});
Object.defineProperty(wrapper, "test", {configurable: false, writable: false});
assertEq(wrapper.test, "hey");
