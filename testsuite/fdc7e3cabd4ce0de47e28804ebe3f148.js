load("201224b0d1c296b45befd2285e95dd42.js");
var callees = [function a() {}, function b() {}, function c() {}, function d() {}, Array.prototype.forEach];

function f() {
    for (var i = 0; i < callees.length; ++i) {
    	callees[i](function(){});
    }
}

f();