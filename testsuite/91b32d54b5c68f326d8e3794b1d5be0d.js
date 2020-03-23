load("201224b0d1c296b45befd2285e95dd42.js");
// Arrow functions are not constructors.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var f = a => { this.a = a; };
assertThrowsInstanceOf(() => new f, TypeError);
assertThrowsInstanceOf(() => new f(1, 2), TypeError);
