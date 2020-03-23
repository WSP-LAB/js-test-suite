load("201224b0d1c296b45befd2285e95dd42.js");
// An exception thrown from a proxy trap while getting the .iterator method is propagated.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("e2c808509c360663d6364e14c187fc8f.js");

var p = new Proxy({}, {
    get(target, property) {
        if (property === Symbol.iterator)
            throw "fit";
        return undefined;
    }
});
assertThrowsValue(function () { for (var v of p) {} }, "fit");
