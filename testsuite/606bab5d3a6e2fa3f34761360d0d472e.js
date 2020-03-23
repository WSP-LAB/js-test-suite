load("201224b0d1c296b45befd2285e95dd42.js");
// Debugger.Source.prototype

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

assertThrowsInstanceOf(function () {
    Debugger.Source.prototype.text.call(42)
}, TypeError);
assertThrowsInstanceOf(function () {
    Debugger.Source.prototype.text.call({})
}, TypeError);
assertThrowsInstanceOf(function () {
    Debugger.Source.prototype.text.call(Debugger.Source.prototype)
}, TypeError);

assertThrowsInstanceOf(function () {
    Debugger.Source.prototype.element.call(42)
}, TypeError);
assertThrowsInstanceOf(function () {
    Debugger.Source.prototype.element.call({})
}, TypeError);
assertThrowsInstanceOf(function () {
    Debugger.Source.prototype.element.call(Debugger.Source.prototype)
}, TypeError);

assertThrowsInstanceOf(function () {
    Debugger.Source.prototype.elementAttributeName.call(42)
}, TypeError);
assertThrowsInstanceOf(function () {
    Debugger.Source.prototype.elementAttributeName.call({})
}, TypeError);
assertThrowsInstanceOf(function () {
    Debugger.Source.prototype.elementAttributeName.call(Debugger.Source.prototype)
}, TypeError);
