load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
// The constructor specified should get called, regardless of order, or
// other distractions

var called = false;
class a { constructor(x) { assertEq(x, 4); called = true } }
new a(4);
assertEq(called, true);

called = false;
var aExpr = class { constructor(x) { assertEq(x, 4); called = true } };
new aExpr(4);
assertEq(called, true);

called = false;
class b { constructor() { called = true } method() { } }
new b();
assertEq(called, true);

called = false;
var bExpr = class { constructor() { called = true } method() { } };
new bExpr();
assertEq(called, true);

called = false;
class c { method() { } constructor() { called = true; } }
new c();
assertEq(called, true);

called = false;
var cExpr = class { method() { } constructor() { called = true; } }
new cExpr();
assertEq(called, true);

called = false;
class d { ["constructor"]() { throw new Error("NO"); } constructor() { called = true; } }
new d();
assertEq(called, true);

called = false;
var dExpr = class { ["constructor"]() { throw new Error("NO"); } constructor() { called = true; } }
new dExpr();
assertEq(called, true);

if (typeof reportCompare === "function")
    reportCompare(0, 0, "OK");
