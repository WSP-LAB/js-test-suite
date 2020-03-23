load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| --dump-bytecode

(function() {
    const x = ((function() {
        return {
            e: function() {
                (function() {
                    for (e in x) {}
                })()
            }
        }
    }(function() {
        return {
            t: {
                c
            }
        }
    })))
})()
