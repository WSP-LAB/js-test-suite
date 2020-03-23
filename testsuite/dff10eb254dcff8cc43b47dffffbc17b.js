load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: InternalError

var Date_toString = newGlobal().Date.prototype.toString;
(function f(){ f(Date_toString.call({})); })();
