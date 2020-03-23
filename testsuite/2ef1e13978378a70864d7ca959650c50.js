load("201224b0d1c296b45befd2285e95dd42.js");
function f(o) {
    f = o.constructor;
    eval('delete o.x');
}
for(var i=0; i<3; i++) {
    f(RegExp.prototype);
}
