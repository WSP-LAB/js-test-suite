load("201224b0d1c296b45befd2285e95dd42.js");

var thrown = false;
try {
    x = [0];
    for (var i = 0; i < 5; ++i) {
        if (i == 3)
            Object.freeze(x);
        else
            x.pop();
    }
} catch (e) {
    thrown = true;
    assertEq(e instanceof TypeError, true);
}

assertEq(thrown, true);

