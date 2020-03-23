load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:InternalError

Object.defineProperty(this, "t2", {
    get: function() {
        for (p in h2) {
            t2
        }
    }
})
h2 = {}
h2.a = function() {}
Object(t2)
