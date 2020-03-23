load("201224b0d1c296b45befd2285e95dd42.js");
x = x = "";
function Obj1(x) {
    this.x = x;
}
function f() {
    var o = {};
    for (var i = 0; i < 1500; i++)
        new Obj1(o);
    Obj1('');
}
f();
