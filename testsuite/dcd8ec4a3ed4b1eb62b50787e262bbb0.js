load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:TypeError; need-for-each

// Binary: cache/js-dbg-64-e8ee411dca70-linux
// Flags:
//
__defineGetter__("x", function () {});
function z() {
    "".replace(/s/, "");
}
z();
(function () {
    for (a = 0; a < 2; a++) {
        __defineGetter__("", /a/);
        for each(y in [__defineGetter__("x", function(){})]) {}
    }
}());
