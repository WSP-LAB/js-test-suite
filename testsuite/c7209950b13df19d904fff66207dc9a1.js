load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

actual = '';
expected = ',0,0,8888,0,0,8888,0,0,/x/,0,0,';

for each(let a in ['', 8888, 8888, /x/]) {
    '';
    for each(e in ['', false, '']) {
        (function(e) {
            for each(let c in ['']) {
                appendToActual(a);
            }
        })();
        for (let aa = 0; aa < 1; ++aa) {
            a = aa;
        }
    }
}


assertEq(actual, expected)
