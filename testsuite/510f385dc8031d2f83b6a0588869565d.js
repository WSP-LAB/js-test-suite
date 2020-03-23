load("201224b0d1c296b45befd2285e95dd42.js");

var C1 = 1;

function f(x) {
    var s = "";

    switch(x) {
    case 0:
        s += "0";
    case C1:
        s += "1";
    }
    return s;
}

assertEq(f(0), "01");
assertEq(f(1), "1");
assertEq(f(2), "");

assertEq(f(true), "");
assertEq(f(Math), "");

