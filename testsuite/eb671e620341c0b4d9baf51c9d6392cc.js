load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

actual = '';
expected = 'zzz ,zzz 100,zzz 100,zzz 7777,zzz 100,zzz 100,zzz 8888,zzz 100,zzz 100,zzz /x/,zzz 100,zzz 100,';

//function f() {
for each(let a in ['', 7777, 8888, /x/]) {
    for each(e in ['', false, '']) {
        (function(e) {
            for each(let c in ['']) {
                appendToActual('zzz ' + a);
            }
	})();
        for (let aa = 100; aa < 101; ++aa) {
            a = aa;
        }
    }
}
//}

//f();


assertEq(actual, expected)
