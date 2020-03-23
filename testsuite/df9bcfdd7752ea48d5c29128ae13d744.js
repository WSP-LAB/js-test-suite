load("201224b0d1c296b45befd2285e95dd42.js");
// executeInGlobal correctly handles optional lineNumber option
var g = newGlobal();
var dbg = new Debugger(g);
var debuggee = dbg.getDebuggees()[0];
var count = 0;

function testLineNumber (options, expected) {
    count++;
    dbg.onNewScript = function(script){
        dbg.onNewScript = undefined;
        assertEq(script.startLine, expected);
        count--;
    };
    debuggee.executeInGlobal("", options);
}


testLineNumber(undefined, 1);
testLineNumber({}, 1);
testLineNumber({ lineNumber: undefined }, 1);
testLineNumber({ lineNumber: 5 }, 5);
assertEq(count, 0);
