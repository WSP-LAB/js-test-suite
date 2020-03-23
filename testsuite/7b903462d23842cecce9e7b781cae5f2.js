load("201224b0d1c296b45befd2285e95dd42.js");

enableShellAllocationMetadataBuilder();
function foo(x, y) {
  this.g = x + y;
}
var a = 0;
var b = { valueOf: function() { return Object.defineProperty(Object.prototype, 'g', {}); } };
var c = new foo(a, b);
