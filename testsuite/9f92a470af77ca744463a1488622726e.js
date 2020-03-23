load("201224b0d1c296b45befd2285e95dd42.js");
// Don't crash.

try {
    x = "          ()    ";
    for (var y = 0; y < 19; y++) {
        x += x;
    }
} catch (e) {}

try {
	"".replace(x, "", "gy");
} catch (e) { }
