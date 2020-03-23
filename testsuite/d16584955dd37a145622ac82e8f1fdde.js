load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: ReferenceError
g = newGlobal();
g.log *= "";
Debugger(g).onDebuggerStatement = frame => frame.eval("log += this.Math.toString();");
let forceException = g.eval(`
    (class extends class {} {
        constructor() {
            debugger;
        }
    })
`);
new forceException;
