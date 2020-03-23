load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    var s='';
    for (var i=0; i < 5000; i++)
	s += 'x' + i + '=' + i + ';\n';
    return s;
}
eval(f());
