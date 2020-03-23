load("201224b0d1c296b45befd2285e95dd42.js");
for (var i = 0; i < 9; i++) {
    var x = {f: function() {}};
    x.f++;
    assertEq(""+x.f, "NaN");
}
