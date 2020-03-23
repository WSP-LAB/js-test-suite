load("201224b0d1c296b45befd2285e95dd42.js");
var o = {};
o.watch("p", function() { });

for (var i = 0; i < 10; i++) {
    o.p = 123;
    delete o.p;
}
