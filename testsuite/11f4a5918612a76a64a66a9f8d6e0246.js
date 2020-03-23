load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError

// Bailout from a stack with multiple ion frames of different flavors.
function f(obj,b,c) {
	return obj(); // Throw error.
}

function g(f,obj) {
	return f(obj); // Call f() with insufficient arguments, generating a RectifierFrame.
}

function h(f, g, obj) {
	return g(f, obj); // EntryFrame. Generate a JSFrame.
}

f(); // Prime f().
g(); // Prime g().
var obj = new Object();

h(f,g,obj);

