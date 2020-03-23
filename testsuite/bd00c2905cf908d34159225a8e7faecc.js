load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: too much recursion
Object.defineProperty(this, "x", {set: function() { this.x = 2; }});
setJitCompilerOption("ion.warmup.trigger", 30);
x ^= 1;
