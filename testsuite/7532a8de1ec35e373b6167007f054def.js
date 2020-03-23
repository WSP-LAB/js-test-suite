load("201224b0d1c296b45befd2285e95dd42.js");
// Test evaluate's catchTermination option.

var x = 0;
assertEq(evaluate('x = 1; terminate(); x = 2;', { catchTermination: true }),
         "terminated");
assertEq(x, 1);
