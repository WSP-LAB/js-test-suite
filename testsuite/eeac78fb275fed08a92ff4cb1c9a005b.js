load("201224b0d1c296b45befd2285e95dd42.js");
function testInt(n, result) {
    var x = 0;
    for (var i = 0; i < 15; i++) {
        if (x % 2 == 0)
            x = 10;
        else
            x %=  0;
    }
    for (var i = 0; i < 15; i++) {    }
}
testInt(2147483647, 2147483647);
testInt(-2147483648, -2147483648);
