load("201224b0d1c296b45befd2285e95dd42.js");
var a = {
    get p() { return 11; },
    test: function () {
	var s = 0;
	for (var i = 0; i < 9; i++)
	    s += this.p;
	assertEq(s, 99);
    }};
a.test();
