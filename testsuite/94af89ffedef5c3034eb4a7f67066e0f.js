load("201224b0d1c296b45befd2285e95dd42.js");
var g = 0;
Object.defineProperty(RegExp.prototype, 'test', { get:function() { ++g } });
function f() {
    for (var i = 0; i < 100; ++i)
        /a/.exec('a');
}
f();
assertEq(g, 0);
