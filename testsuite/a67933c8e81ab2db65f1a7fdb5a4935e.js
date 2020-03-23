load("201224b0d1c296b45befd2285e95dd42.js");
function F() {
    try {
	var T = {};
        throw 12;
    } catch (e) {
	// Don't throw.
        T.x = 5;
    }
}
F();
F();
F();
