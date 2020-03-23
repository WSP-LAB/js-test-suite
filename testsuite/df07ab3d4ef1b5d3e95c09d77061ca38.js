load("201224b0d1c296b45befd2285e95dd42.js");
var failures = 0;
function a() {
	return new Array(-1);
}
for (var j = 0; j < 61; ++j) {
	try {
		a();
		++failures;
	} catch (e) {
	}
}
