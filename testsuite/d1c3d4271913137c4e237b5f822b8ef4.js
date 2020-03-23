load("201224b0d1c296b45befd2285e95dd42.js");
// Test 1: When constructing x, we shouldn't take the prototype for this.
// it will crash if that happens
evalcx("\
    var x = newGlobal().Object;\
    function f() { return new x; }\
    f();\
    f();\
", newGlobal());
