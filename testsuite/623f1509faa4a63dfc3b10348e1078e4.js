load("201224b0d1c296b45befd2285e95dd42.js");


function test1() {
    test();
}

function test() {
    var du = new Debugger();
    du.setupTraceLoggerScriptCalls();
    du.startTraceLogger();
}

var du = new Debugger();
if (typeof du.setupTraceLoggerScriptCalls == "function")
    test1();
