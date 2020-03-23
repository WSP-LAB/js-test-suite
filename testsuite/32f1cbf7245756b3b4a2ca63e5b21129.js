load("201224b0d1c296b45befd2285e95dd42.js");
var proxy = new Proxy(function() {
        return (function () { eval("foo") })();
    }, {});

try {
    new proxy();
} catch (e) {
}
