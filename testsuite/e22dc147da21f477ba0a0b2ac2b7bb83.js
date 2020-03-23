load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:TypeError

// Binary: cache/js-dbg-64-74a8fb1bbec5-linux
// Flags: -m -n -a
//
test();
function test()
{
  for (var j = 0; j < 10; ++j) new j;
}
