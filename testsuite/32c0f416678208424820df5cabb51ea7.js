load("201224b0d1c296b45befd2285e95dd42.js");
try {
    (function() {
        Object.defineProperty(this, "x", {
            get: function() {
                Object.defineProperty(this, "y", {
                    configurable: true,
                    get: function() {
                        return Proxy(this.y)
                    }
                });
                x;
            }
        })
    })()
    x
} catch (e) {}
try {
    x
} catch (e) {}
try {
    x
} catch (e) {}
try {
    y
} catch (e) {}
try {
    y
} catch (e) {}
try {
    y
} catch (e) {}
