load("201224b0d1c296b45befd2285e95dd42.js");
Object.defineProperty(Object.prototype, 'x', { 
    set: function() { evalcx('lazy'); } 
});
var obj = {};
obj.watch("x", function (id, oldval, newval) {});
for (var str in 'A') {
    obj.x = 1;
}
