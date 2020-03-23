load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

actual = '';
expected = 'undefined,[object Object],undefined,[object Object],undefined,[object Object],undefined,[object Object],undefined,[object Object],undefined,[object Object],undefined,[object Object],undefined,[object Object],undefined,[object Object],undefined,[object Object],';

function f() {
for (var q = 0; q < 10; ++q) {
    for each(let b in [(void 0), {}]) {
	(function() {
	    for (var i = 0; i < 1; ++i) {
	      appendToActual('' + b)
	    }
        }())
    }
}
}

f()


assertEq(actual, expected)
