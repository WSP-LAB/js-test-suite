load("201224b0d1c296b45befd2285e95dd42.js");
var a = {_val: 'q',
	 get p() { return f; }};

function f() { return this._val; }

var g = '';
for (var i = 0; i < 9; i++)
    g += a.p();
assertEq(g, 'qqqqqqqqq');
