load("201224b0d1c296b45befd2285e95dd42.js");
// Arrow functions do not have a .prototype property.

assertEq("prototype" in (a => a), false);
assertEq("prototype" in (() => {}), false);
