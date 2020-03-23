load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");
var calledToString = false;
assertThrowsInstanceOf(function () { Object.prototype.hasOwnProperty.call(null,
                      {toString: function () { calledToString = true; }}); },
                       TypeError);
assertEq(calledToString, true);
