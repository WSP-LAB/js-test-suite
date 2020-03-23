load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: ReferenceError
var k = 0;
function test() {
    function gen()  {
	try {
	    try {
		yield 1;
	    } finally {
		if (k++ < 60)
		    actual += "Inner finally";
	    }
	} finally { }
    }
    try {
	for (var i in gen())
	    test();
    } catch (e) {
	throw e;
    }
}
test();
