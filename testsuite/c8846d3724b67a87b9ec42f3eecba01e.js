load("201224b0d1c296b45befd2285e95dd42.js");
executed = false;
Object.defineProperty(Object.prototype, 'x', { set: function() { executed = true; } });
function A() {
    this.x = 12;
}
new A();
assertEq(executed, true);
