load("201224b0d1c296b45befd2285e95dd42.js");

function f(a) {
    switch(a) {
    }
    switch(a) {
        default: return 0;
    }
    assertEq(0, 1);
}

assertEq(f(), 0);
assertEq(f(0), 0);
assertEq(f(1.1), 0);

