load("201224b0d1c296b45befd2285e95dd42.js");
/* Don't assert. */
function f(x)
{
	if ("hi" == (x & 3)) {
		return 1;
	}
}
f(12);
