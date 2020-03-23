load("201224b0d1c296b45befd2285e95dd42.js");
Object.defineProperty(this, "x", { get: decodeURI, configurable: true })
try {
    String(b = new Proxy(function() { }, {
        get: function(r, z) {
            return x[z]
        }
    }))
} catch (e) {};
var log = "";
evaluate(`
try {
    function x() {}
    assertEq(String(b), "function () {}");
} catch (e) { log += "e"; }
`);
assertEq(log, "e");
