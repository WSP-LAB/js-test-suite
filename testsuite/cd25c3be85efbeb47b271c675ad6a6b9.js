load("201224b0d1c296b45befd2285e95dd42.js");
Object.prototype[1] = 'peek';
var g = newGlobal();
var dbg = Debugger(g);
dbg.onEnterFrame = function (frame) {
    var lines = frame.script.getAllOffsets();
};
g.eval("1;");
