load("201224b0d1c296b45befd2285e95dd42.js");
function testNewObject()
{
    var a = {};
    for (var i = 0; i < 10; ++i)
	a = new Object();
    return a;
}
assertEq(testNewObject().__proto__, {}.__proto__);
