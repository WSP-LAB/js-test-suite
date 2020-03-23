load("201224b0d1c296b45befd2285e95dd42.js");
// Test case from bug 785989 comment 3.

version(170);
Reflect.parse("for (let [a, b] of c) ;");
