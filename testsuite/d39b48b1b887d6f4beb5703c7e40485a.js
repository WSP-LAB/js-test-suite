load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| allow-oom

if (!('oomTest' in this))
    quit();

oomTest(() => {
    let global = newGlobal();
    Debugger(global).onDebuggerStatement = function (frame) {
        frame.eval("f")
    }
    global.eval("debugger")
}, false);
