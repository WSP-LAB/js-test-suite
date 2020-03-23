load("201224b0d1c296b45befd2285e95dd42.js");
var o = {y: function () {}};
var a = [o, o, o, o, o, o, o, o, o];
a[7] = {};
try {
    for (var i = 0; i < 9; i++)
        a[i].y();
} catch (exc) {
    assertEq(exc.name, "TypeError"); // should happen when i == 7
}
