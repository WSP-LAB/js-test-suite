load("201224b0d1c296b45befd2285e95dd42.js");
actual = '';
expected = '0 0 0 0 0 0 0 0 0,';

    var o = [];
    for (var a = 0; a < 9; ++a) {
        var unused = 0;
        let zero = 0;
        for (var ee = 0; ee < 1; ++ee) {
          o.push((function () zero)());
        }
    }
    appendToActual(o.join(" "));


assertEq(actual, expected)
