load("201224b0d1c296b45befd2285e95dd42.js");
// Binary: cache/js-dbg-64-c9212eb6175b-linux
// Flags:
//
function f(a) {
   function g() {
       yield function () { return a; };
   }
   return g();
}
var x;
f(7).next()();
