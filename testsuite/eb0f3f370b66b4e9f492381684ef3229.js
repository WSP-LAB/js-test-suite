load("201224b0d1c296b45befd2285e95dd42.js");
var res;
for (var i = 0; i < 10; i++) {
    var re = /a(b)c/;
    var b = (re.exec(""), v = re.exec("abc")) !== null;
    assertEq(v[0], "abc");
    assertEq(v[1], "b");
}

