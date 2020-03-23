load("201224b0d1c296b45befd2285e95dd42.js");
// Test that we can create 1000 cross compartment wrappers to nursery objects
// without trigger a minor GC.
gczeal(0);
let g = newGlobal();
evalcx("function f(x) { return {x: x}; }", g);
gc();
let initial = gcparam("gcNumber");
for (let i = 0; i < 1000; i++)
    g.f(i);
let final = gcparam("gcNumber");
assertEq(final, initial);
