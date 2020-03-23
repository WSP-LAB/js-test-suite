load("201224b0d1c296b45befd2285e95dd42.js");
gczeal(14);
verifyprebarriers();
x = [];
Array.prototype.push.call(x, new Uint8Array());
Array.prototype.some.call(x, function() {
    try {
        y.toString();
    } catch (e) {}
});
Array.prototype.shift.call(x);
