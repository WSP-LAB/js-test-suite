load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

actual = '';
expected = 'ddd,';

// Bug 508187
{ let f = function (y) {
    { let ff = function (g) {
        for each(let h in g) {
            if (++y > 5) {
	        appendToActual('ddd')
            }
        }
    };
      ff(['', null, '', false, '', '', null])
    }
};
    f(-1)
}


assertEq(actual, expected)
