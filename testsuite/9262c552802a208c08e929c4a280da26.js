load("201224b0d1c296b45befd2285e95dd42.js");
// Binary: cache/js-dbg-32-9d6f5ab54933-linux
// Flags: -j
//
(function() {
    var Y = function() {};
    function g() {
        function f(x) {
            for (var j = 0; j < 1; ++j) {
                x.apply(this);
            }
        }
        return function() {
            f(Y);
        }
    };
    for (var i = 0; i < 2; ++i) {
        g()();
    }
})();
