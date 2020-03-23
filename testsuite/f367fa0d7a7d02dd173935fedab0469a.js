load("201224b0d1c296b45befd2285e95dd42.js");
// Binary: cache/js-dbg-64-1210706b4576-linux
// Flags:
//
load("6ec98b17981f95f4363b8bc9869495e2.js");

if (globalPrototypeChainIsMutable()) {
  this.__proto__ = null;
  Object.prototype.__proto__ = this;
}

function exploreProperties(obj) {
  var props = [];
  for (var o = obj; o; o = Object.getPrototypeOf(o)) {
    props = props.concat(Object.getOwnPropertyNames(o));
  }
  for (var i = 0; i < props.length; ++i) {
    var p = props[i];
    var v = obj[p];
  }
}
var c = [{}];
exploreProperties(c);
