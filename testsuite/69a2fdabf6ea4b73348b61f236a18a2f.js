load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

actual = '';
expected = 'nocrash,';

let z = {};
for (var i = 0; i < 4; ++i) {
    for each (var e in [{}, 1, {}]) {
        +(function () z)();
    }
}

appendToActual('nocrash')


assertEq(actual, expected)
