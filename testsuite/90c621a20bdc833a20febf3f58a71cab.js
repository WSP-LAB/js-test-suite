load("201224b0d1c296b45befd2285e95dd42.js");
// Don't crash or assert.

var d;
this.watch("d", eval);
(function () {
    (eval("\
    (function () {\
        for (let x = 0; x < 2; ++x) {\
            d = x\
        }\
    })\
"))()
})()
