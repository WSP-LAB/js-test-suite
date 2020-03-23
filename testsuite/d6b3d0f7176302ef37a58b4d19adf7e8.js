load("201224b0d1c296b45befd2285e95dd42.js");
// Random chosen test: js/src/jit-test/tests/debug/Source-invisible.js
newGlobal({
    invisibleToDebugger: true
})
// Random chosen test: js/src/jit-test/tests/debug/Debugger-findObjects-05.js
x = (new Debugger).findObjects()
