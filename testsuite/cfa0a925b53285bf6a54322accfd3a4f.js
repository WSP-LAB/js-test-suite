load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:InternalError

// Binary: cache/js-dbg-64-5a04fd69aa09-linux
// Flags: --ion-eager
//

var patterns = new Array();
patterns[0] = '';
test();
function test() {
  for (i in patterns) {
    s = patterns[i];
    status =(test)(s);
  }
}
