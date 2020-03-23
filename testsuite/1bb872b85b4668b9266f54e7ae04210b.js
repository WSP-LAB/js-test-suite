load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

m={}
Object.defineProperty(m, 'p', {value: 3});
assertThrowsInstanceOf(function() {"use strict"; delete m.p;}, TypeError);

x = new Proxy(m, {})
assertEq(x.p, 3);
assertThrowsInstanceOf(function fun() {"use strict"; return delete x.p; }, TypeError);
