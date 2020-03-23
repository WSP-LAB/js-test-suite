load("201224b0d1c296b45befd2285e95dd42.js");
var y;
function f() {
    for(var _ in [3.14]) {
        y = 3.14;
        y = y ^ y;
        return y;
        
        function g() {
        }
    }
}
assertEq(f(), 0);
