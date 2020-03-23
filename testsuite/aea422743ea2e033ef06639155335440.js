load("201224b0d1c296b45befd2285e95dd42.js");
// Binary: cache/js-dbg-64-0230a9e80c1f-linux
// Flags: -m
//
var code = "(function(){ function eval(){} function eval(){} ";
for (var i = 0; i < 2048; ++i) {
	code += " try{}catch(e){}";
}
code += " })()"
eval(code);
