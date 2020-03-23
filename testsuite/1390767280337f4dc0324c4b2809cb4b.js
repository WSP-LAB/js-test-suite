load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: ReferenceError

eval("(function() { " + "\
var o = {};\
o.watch('p', function() { });\
for (var i = 0; i < 10; \u5ede ++)\
    o.p = 123;\
" + " })();");
