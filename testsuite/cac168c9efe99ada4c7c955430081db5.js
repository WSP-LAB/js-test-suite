load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:ReferenceError

// Binary: cache/js-dbg-64-67bf9a4a1f77-linux
// Flags: --ion-eager
//

(function () {
  var a = ['x', 'y'];
  obj.watch(a[+("0")], counter);
})();
