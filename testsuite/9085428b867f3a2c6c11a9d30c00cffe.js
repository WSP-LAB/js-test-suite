load("201224b0d1c296b45befd2285e95dd42.js");
// defineProperty throws if a getter or setter is neither undefined nor callable.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);

for (let v of [null, false, 'bad', 0, 2.76, {}]) {
    assertThrowsInstanceOf(function () {
        gw.defineProperty("p", {configurable: true, get: v});
    }, TypeError);
    assertThrowsInstanceOf(function () {
        gw.defineProperty("p", {configurable: true, set: v});
    }, TypeError);
}
