load("201224b0d1c296b45befd2285e95dd42.js");
var obj = {};
(function() {
    if (obj) {
        function f() { obj.x = 1; }
        obj.m = function() { f(); };
    }
})();
obj.m();
assertEq(obj.x, 1);
