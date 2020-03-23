load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

function testStringResolve() {
    var x = 0;
    for each (let d in [new String('q'), new String('q'), new String('q')]) {
        if (("" + (0 in d)) === "true")
            x++;
    }
    return x;
}
assertEq(testStringResolve(), 3);
