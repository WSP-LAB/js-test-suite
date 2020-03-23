load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

var x = {f: 1, g: 0};
function f() {
    for each (new f().nosuch.prop in x)
	throw 'FAIL';
}

var e;
try {
    f();
} catch (exc) {
    e = exc;
}
assertEq(e instanceof InternalError, true);
