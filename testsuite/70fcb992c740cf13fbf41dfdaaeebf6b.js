load("201224b0d1c296b45befd2285e95dd42.js");
function test() {
    var a = {get p() { return 'q'; }};
    var s = '';
    for (var i = 0; i < 9; i++)
	s += a.p;
    assertEq(s, 'qqqqqqqqq');
}
test();
