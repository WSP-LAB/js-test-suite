load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

function*g(){ };
o = g();
o.next();
function TestException() {};
assertThrowsInstanceOf(() => o.throw(new TestException()), TestException);
