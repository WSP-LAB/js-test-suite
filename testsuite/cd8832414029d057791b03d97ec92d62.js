load("201224b0d1c296b45befd2285e95dd42.js");
h = function(m, foreign, n) {
    "use asm";
    var ff = foreign.ff;
    function f(x) {
        x = +x;
        ff();
    }
    return f;
}(0, {
    ff: function() {
        return {
            e: String.prototype.substring
        };
    }
}, 0);
for (var k = 0; k < 999; k++) {
    h();
}
