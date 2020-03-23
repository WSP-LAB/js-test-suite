load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError
__defineGetter__("x", function() { return /a/.exec(undefined); } );
" ".replace(/\s/,"");
x.b
