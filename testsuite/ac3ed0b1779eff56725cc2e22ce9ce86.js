load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:recursion
x = /x/;
z = [];
y = Object.defineProperty(z, "valueOf", {
    get: function() {
        +y;
        for (var i = 0; i < 1; i++) {
            a = x.exec(0);
        }
    }
})
z + '';
