load("201224b0d1c296b45befd2285e95dd42.js");
Function("\
    g = (function(t,foreign){\
        \"use asm\";\
        var ff = foreign.ff;\
        function f() {\
            +ff()\
        }\
        return f\
    })(this, {\
        ff: arguments.callee\
    }, new ArrayBuffer(4096))\
")()
function m(f) {
    for (var j = 0; j < 6000; ++j) {
        f();
        if ((j % 1000) === 0)
            gc();
    }
}
m(g);
