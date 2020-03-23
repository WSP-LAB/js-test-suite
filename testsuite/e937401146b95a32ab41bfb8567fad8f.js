load("201224b0d1c296b45befd2285e95dd42.js");
// map(x => x, 32) is two arguments, not one

assertEq("" + [1, 2, 3, 4].map(x => x, 32), "1,2,3,4");
