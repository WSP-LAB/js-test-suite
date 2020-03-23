load("201224b0d1c296b45befd2285e95dd42.js");
delete _quit;

function testSlowNativeCtor() {
    for (var i = 0; i < 4; i++)
	new Date().valueOf();
}
testSlowNativeCtor();
