load("201224b0d1c296b45befd2285e95dd42.js");
// Some testing for JSOP_NEW.
function foo(prop) {
	this.name = "Foo";
	this.prop = prop;
	return this;
}

// Construct an object with a unique assignation to a property.
function f(i) {
	var x = new foo(i);
	return x.prop;
}

// Assert that a unique object really was created.
for (var i = 0; i < 100; i++)
	assertEq(f(i), i);
