load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:ReferenceError; need-for-each

// Binary: cache/js-dbg-64-1cd24ecc343d-linux
// Flags:
//
(function(){
  var c;
  eval("var c; for each(var c in s);");
})()
