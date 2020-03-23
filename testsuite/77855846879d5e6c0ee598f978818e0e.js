load("201224b0d1c296b45befd2285e95dd42.js");
Object.defineProperty(Object.prototype, 'x', {
    set: function() {}
});
var obj = {};
for (var i = 0; i < 100 ; ++i) {
    obj.x = 1;
    delete obj.x;
}
