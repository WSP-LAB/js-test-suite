load("201224b0d1c296b45befd2285e95dd42.js");
setJitCompilerOption("ion.warmup.trigger", 50);

var f32 = new Float32Array(1);
f32[0] = 13;
var str = "CAN HAS cheezburger? OKTHXBYE";
var c;

function f() {
    c = str[ f32[0] ];
}

for(var n = 100; n; --n) f();
print (c);
