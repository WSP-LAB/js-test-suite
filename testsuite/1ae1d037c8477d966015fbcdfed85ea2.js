load("201224b0d1c296b45befd2285e95dd42.js");
enableOsiPointRegisterChecks()
function f() {}
f.__defineGetter__("x", (function() {
    this._
}))
for (var i = 0; i < 3; i++) {
    (function() {
        for (var j = 0; j < 1; j++) {
            f.x + 1
        }
    })()
}
