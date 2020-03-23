load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:TypeError; need-for-each

// Binary: cache/js-dbg-32-29add08d84ae-linux
// Flags: -j
//
this.watch('y',  /x/g );
for each (y in ['q', 'q', 'q']) continue;
gc();
