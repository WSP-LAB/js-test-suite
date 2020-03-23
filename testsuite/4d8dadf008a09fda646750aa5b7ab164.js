load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: InternalError
y = 'x'
for (var i=0; i<100; i++)
    y += y;
print(y.length);
