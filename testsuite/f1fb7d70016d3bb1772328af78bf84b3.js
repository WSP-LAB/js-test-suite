load("201224b0d1c296b45befd2285e95dd42.js");
assertEq((function(x) {
    (function () { x++ })();
    var z;
    ({ z } = { z:'ponies' })
    return z;
})(), 'ponies');
