load("201224b0d1c296b45befd2285e95dd42.js");
for (var i=0; i<20; i++) {
    (function () {
        var x;
        (function () {
            x = /abc/;
            x++;
            gc();
        })();
    })();
}
