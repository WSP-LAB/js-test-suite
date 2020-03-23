load("201224b0d1c296b45befd2285e95dd42.js");

function outer(code) {
    function inner() {
	eval(code);
    }
    inner();
}
outer("1");
outer("assertEq(typeof arguments, 'object');");
