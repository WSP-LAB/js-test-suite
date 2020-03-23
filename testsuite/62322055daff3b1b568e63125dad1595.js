load("201224b0d1c296b45befd2285e95dd42.js");
load("00e0aa336e6c8b65ee1f164279cff5fc.js");

function test(s) {
    eval(s);
    {
      let y = evalInFrame(0, '3'), x = x0;
	    assertEq(x, 5);
    }
}
test('var x0= 5;');
