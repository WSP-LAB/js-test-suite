load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError

var glob = this;
var arr = [];
Object.defineProperty(arr, 0, {
  get: (function() {
    glob.__proto__;
  })
});
this.watch("s", function() {});
try {
  arr.pop();
} catch (e) {}
arr.pop();
