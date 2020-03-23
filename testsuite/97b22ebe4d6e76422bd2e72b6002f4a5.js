load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    for (var a = 0; a < 8; ++a) {
        (function () {
            var x;
            for (var b = 0; b < 8; ++b) {
                x = 0;
                (function () {
                    for (var i = 0; i < 1; ++i) {
                        x = 1;
                    }
                })();
                x++;
            }
        })();
    }
}
f();
