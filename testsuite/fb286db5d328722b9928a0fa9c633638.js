load("201224b0d1c296b45befd2285e95dd42.js");
function gen() {
    try {
	yield 3;
    } finally {
	quit();
    }
}
try {
    for (var i in gen())
	foo();
} catch (e) {}
