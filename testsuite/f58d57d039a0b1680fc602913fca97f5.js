load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    var x = 0;
    for(var i=0; i<5; i++) {
        (function() {
          var q = parseFloat("2");
          x += q;
        })();
    }
    return x;
}
assertEq(f(), 10);
