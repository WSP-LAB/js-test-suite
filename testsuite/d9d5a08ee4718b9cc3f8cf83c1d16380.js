load("201224b0d1c296b45befd2285e95dd42.js");
for (p in this) {
    delete p;
}
for (p in this) {}
evaluate("for(var i=0; i<50; i++) p = 1");
assertEq(p, 1);
