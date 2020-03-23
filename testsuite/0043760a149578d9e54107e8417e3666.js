load("201224b0d1c296b45befd2285e95dd42.js");
(function() {
    var x;
    for (let j = 0; j < 1; j = j + 1) 
        x = function() { return j; };
    assertEq(x(), 0);
})();
