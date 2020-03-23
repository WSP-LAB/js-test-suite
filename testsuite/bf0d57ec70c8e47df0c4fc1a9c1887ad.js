load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");
var o = Object.preventExtensions(new ArrayBuffer);
assertThrowsInstanceOf(function () { o.__proto__ = {}; }, TypeError);
