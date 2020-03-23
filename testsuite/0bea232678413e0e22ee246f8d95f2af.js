load("201224b0d1c296b45befd2285e95dd42.js");
actual = '';
expected = 'undefined,';

function f() { 
    (eval("\
        (function () {\
            for (var z = 0; z < 2; ++z) {\
                x = ''\
            }\
        })\
    "))();
}
this.__defineSetter__("x", eval)
f()
appendToActual(x);


assertEq(actual, expected)
