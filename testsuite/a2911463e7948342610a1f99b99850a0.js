load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| allow-oom
// array.splice should throw if array.length is too large.

var length = 4294967295;
var array = new Array(length);
array.splice(100);
