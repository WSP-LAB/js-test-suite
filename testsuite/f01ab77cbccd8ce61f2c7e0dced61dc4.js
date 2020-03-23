load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: ReferenceError
function reportCompare (expected, actual, description) {
    if (expected != actual) {}
}
reportCompare(1);
addThis();
function addThis() {
    for (var i=0; i<UBound; i++)
	reportCompare( true | this && this );
}
