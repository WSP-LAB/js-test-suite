load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: ReferenceError;
gczeal(4);
try { jsTestDriverEnd(); } catch(exc1) {}
evaluate("\
schedulegc(10);\
for(var i=0; i<3; i++) {\
    var obj = { first: 'first', second: 'second' };\
    for (var elem in obj) {}\
    x.push(count);\
}\
");
