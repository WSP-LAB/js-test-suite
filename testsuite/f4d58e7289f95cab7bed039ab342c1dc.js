load("201224b0d1c296b45befd2285e95dd42.js");
load("00e0aa336e6c8b65ee1f164279cff5fc.js");

o = { toString:function() { return evalInFrame(1, "x") } }
var x = 'C';
var s = "aaaaaaaaaa".replace(/a/g, function() { var x = 'B'; return o });
assertEq(s, "CCCCCCCCCC");
