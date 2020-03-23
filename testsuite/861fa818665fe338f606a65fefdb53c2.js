load("201224b0d1c296b45befd2285e95dd42.js");
for (var i = 0; i < 12; ++i) {
    var o;

    o = new Object(Object);
    assertEq(o, Object);

    (function () {
        x = constructor
    })();
    o = new(x)(x);
    assertEq(o, Object);
}
