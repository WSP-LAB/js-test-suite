load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    var a = [];
    for (var i=0; i<100; i++)
        a.push({x: i});

    var vals = [1, "", true, null];

    for (var j=0; j<100; j++) {
        var v = vals[j % vals.length];
        a[95].y = v;
        assertEq(a[95].y, v);
        a[j].z1 = v;
        a[j].z2 = v;
        assertEq(a[j].z1, v);
        assertEq(a[j].z2, v);
    }
}
f();
