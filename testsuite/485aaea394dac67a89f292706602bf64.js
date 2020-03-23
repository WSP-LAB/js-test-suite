load("201224b0d1c296b45befd2285e95dd42.js");

x = new Uint8ClampedArray;
x.__proto__ = {};
Object.defineProperty(this, "y", {
    get: function() {
        return x.length;
    }
});
assertEq(y, undefined);
