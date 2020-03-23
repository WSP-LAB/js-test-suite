load("201224b0d1c296b45befd2285e95dd42.js");
// yield is not allowed in eval in a star generator.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
var dbg = new Debugger(g);

dbg.onDebuggerStatement = function (frame) {
    assertThrowsInstanceOf(function() { frame.eval('yield 10;') }, SyntaxError);
};

g.eval("(function*g(){ debugger; })()");
