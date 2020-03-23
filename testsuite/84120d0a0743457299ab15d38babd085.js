load("201224b0d1c296b45befd2285e95dd42.js");
var o = {};
for(var i=0; i<5; i++) {
    o.p = 2;
    o.watch("p", function() { });
    o.p = 2;
    delete o.p;
}
