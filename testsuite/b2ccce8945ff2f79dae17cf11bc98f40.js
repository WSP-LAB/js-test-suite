load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError

let g = newGlobal();
let dbg = Debugger(g);

let forceException = g.eval(`
    (class extends class {} {
        // Calling this will return a primitive on return.
        constructor() { return {}; }
    })
`);

dbg.onEnterFrame = function(f) {
    f.onPop = function() {
        return {
            // Force the return of an illegal value.
            return: 1
        }
    }
}

new forceException;
