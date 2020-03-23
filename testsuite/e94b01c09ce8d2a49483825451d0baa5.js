load("201224b0d1c296b45befd2285e95dd42.js");
// Don't assert in the decompiler.
function f() {
    var o = null;

    try {
	delete o.prop;
    } catch(e) {}

    try {
	delete o[1];
    } catch(e) {}

    try {
	o[{}]++;
    } catch(e) {}
}
f();
