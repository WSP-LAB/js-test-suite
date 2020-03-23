load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test|

try {
    a = []
    r = /x/
    gczeal(10, 2)()
} catch (e) {}
try {
    (function() {
        r(function() {
            eval()
        })
    })()
} catch (e) {}
try {
    s
} catch (e) {}
a.every(function() {})
