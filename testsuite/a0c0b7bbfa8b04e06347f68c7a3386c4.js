load("201224b0d1c296b45befd2285e95dd42.js");
//Bug 818620

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

assertThrowsInstanceOf(function () {
    Math.max(NaN, { valueOf: function () { throw new Error() } });
}, Error);

assertThrowsInstanceOf(function () {
    Math.min(NaN, { valueOf: function () { throw new Error() } });
}, Error);
