load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError
(function () {
    var i = 0; 
    (function () {
        var x;
        (x = "3") || 1;
        (x = "")(i || x);
    })();
})();
