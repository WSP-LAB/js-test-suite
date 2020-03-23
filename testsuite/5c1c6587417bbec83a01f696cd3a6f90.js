load("201224b0d1c296b45befd2285e95dd42.js");
if (typeof SIMD !== 'object')
    quit(0);

function test() {
    return SIMD.Float32x4().toSource();
}

var r = '';
for (var i = 0; i < 10000; i++)
    r = test();
