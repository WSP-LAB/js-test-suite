load("201224b0d1c296b45befd2285e95dd42.js");
gczeal(2);

for(var i=0; i<20; i++) {
    function f() {
        for (var j = 0; j < 3; j++) {
            (function() {})();
        }
    }
    f();
}
