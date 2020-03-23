load("201224b0d1c296b45befd2285e95dd42.js");
var proxy = new Proxy({ get: function() { throw 42; } }, {});
Function.prototype.__proto__ = proxy;
this.hasOwnProperty("Intl");
