load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:TypeError

// Binary: cache/js-dbg-64-d078623f7875-linux
// Flags: -m -n -a
//

function testKeyTransitions() {
  var i, key, result, message;
  var array = [];
  for (i = 0; i != 10; i++) {
    key = (i < 3) ? 'pop' : (/\u009e\u0029/g );
    array[key](i);
  }
}
testKeyTransitions();
