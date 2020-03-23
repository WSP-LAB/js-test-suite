load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:ReferenceError

// Binary: cache/js-dbg-64-acf3c1fb7c94-linux
// Flags: --ion-eager
//

function k(f_arg) {
  for (var i = 0; i < 10; ++i) {
    f_arg(  ) ;
  }
}
function t() {
  k(function (i) { actual ^ this | this; });
}
var ans = 0;
for (var j = 0; j < 10; ++j) {
  for (var i = 0; i < 10; ++i) {
    ans += t();
  }
}
