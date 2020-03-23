load("201224b0d1c296b45befd2285e95dd42.js");
var accesses = 100000;

for (var i = 0; i < accesses; i++)
    assertEq(timesAccessed, i+1);

gc();

assertEq(timesAccessed, accesses + 1);
