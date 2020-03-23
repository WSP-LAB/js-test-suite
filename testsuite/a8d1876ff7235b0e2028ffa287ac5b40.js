load("201224b0d1c296b45befd2285e95dd42.js");
function C() {
    this.m = function () {};  // JSOP_SETMETHOD
}

var a = [new C, new C, new C, new C, new C, new C, new C, new C, new C];
var b = [new C, new C, new C, new C, new C, new C, a[8],  new C, new C];

var thrown = 'none';
try {
    for (var i = 0; i < 9; i++) {
	a[i].m();
	b[i].m = 0.7;  // MethodWriteBarrier required here
    }
} catch (exc) {
    thrown = exc.name;
}
assertEq(thrown, 'TypeError');
