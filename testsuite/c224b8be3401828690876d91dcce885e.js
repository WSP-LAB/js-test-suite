load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| --ion-pgo=on;

try {
    x = evalcx('');
    x.__proto__ = 0;
} catch (e) {}
(function() {
    for (var i = 0; i < 1; ++i) {
        if (i % 5 == 0) {
            for (let z of[0, 0, new Boolean(false), new Boolean(false),
                          new Boolean(false), new Boolean(false)]) {
                this.x;
            }
        }
    }
})()
