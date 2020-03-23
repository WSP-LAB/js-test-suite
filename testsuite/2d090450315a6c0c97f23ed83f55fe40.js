load("201224b0d1c296b45befd2285e95dd42.js");
load("dc4b20628140c803c89c741458a4c2d0.js");
assertEqArray(/((a|)+b)+/.exec('bb'), [ "bb", "b", "" ]);
