load("201224b0d1c296b45befd2285e95dd42.js");
var z = 0;
function f() {
    this.b = function() {};
    this.b = undefined;
    if (z++ > 8)
        this.b();
}

try {
    for (var i = 0; i < 10; i++)
        new f();
} catch (exc) {}
