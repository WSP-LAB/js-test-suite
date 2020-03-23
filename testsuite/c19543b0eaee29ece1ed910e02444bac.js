load("201224b0d1c296b45befd2285e95dd42.js");
// evalWithBindings correctly handles optional lineNumber option
var g = newGlobal();
var dbg = new Debugger(g);
var count = 0;

function testLineNumber (options, expected) {
    count++;
    dbg.onDebuggerStatement = function (frame) {
        dbg.onNewScript = function (script) {
            dbg.onNewScript = undefined;
            assertEq(script.startLine, expected);
            count--;
        };
        frame.evalWithBindings("", {}, options);
    };
    g.eval("debugger;");
}


testLineNumber(undefined, 1);
testLineNumber({}, 1);
testLineNumber({ lineNumber: undefined }, 1);
testLineNumber({ lineNumber: 5 }, 5);
assertEq(count, 0);
