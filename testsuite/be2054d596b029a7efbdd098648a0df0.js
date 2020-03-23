load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    var o = { a: 5 };

    for (var i = 0; i < 5; ++i) {
	o.a = i;
    }

    assertEq(o.a, 4);
}

f(); 