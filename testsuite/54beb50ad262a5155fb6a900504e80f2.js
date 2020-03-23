load("201224b0d1c296b45befd2285e95dd42.js");
function inner_double_outer_int() {
    function f(i) {
        for (var m = 0; m < 20; ++m)
            for (var n = 0; n < 100; n += i)
                ;
        return n;
    }
    return f(.5);
}
assertEq(inner_double_outer_int(), 100);
