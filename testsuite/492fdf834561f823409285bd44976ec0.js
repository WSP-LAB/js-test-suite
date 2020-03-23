load("201224b0d1c296b45befd2285e95dd42.js");
var caught = false;
try {
    (function() {
        let x = (function f(y) {
            if (y == 0) {
                x
                return
            }
            return f(y - 1)
        })(3)
    })()
} catch(e) {
    caught = true;
}
assertEq(caught, true);
