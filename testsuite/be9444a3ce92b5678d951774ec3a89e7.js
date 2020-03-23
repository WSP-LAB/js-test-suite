load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

function f(tag) { return {[tag](){return 1;}}; }
a = [];
for (var i = 0; i < 2000; i++)
    a[i] = f("first");

for (var i = 0; i < 2000; i++)
    assertEq(a[i].first(), 1);

for (var i = 0; i < 2000; i++)
    a[i] = f("second");

for (var i = 0; i < 2000; i++)
    assertEq(a[i].second(), 1);
