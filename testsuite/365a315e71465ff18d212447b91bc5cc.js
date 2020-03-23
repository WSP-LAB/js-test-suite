load("201224b0d1c296b45befd2285e95dd42.js");
// Test createThisScripted(), without a singleton.
function Foo(a) {
	this.str = "foo";
}

function Bar(a) {
	this.str = "bar";
}

function f() {
	var x;
	for (var i = 0; i < 400; i++) {
		if (i % 2 == 0)
			x = Foo;
		else
			x = Bar;

		var y = new x(5);

		if (i % 2 == 0)
			assertEq(y.str, "foo");
		else
			assertEq(y.str, "bar");
	}
}

f();
