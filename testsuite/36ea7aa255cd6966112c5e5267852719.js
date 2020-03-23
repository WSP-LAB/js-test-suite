load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    var i = 0;
  outer:
    for (var x = 0; x < 10; x++) {
        while (true) {
            if (i > 150)
                continue outer;
            i++;
        }
    }
    assertEq(i, 151);
}
f();
