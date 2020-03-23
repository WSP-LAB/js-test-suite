load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each


c = {}.__proto__[1] = 3;
(function() {
    function b(a) {
        return a
    }
    for each(let z in [{}]) {
        print(new b(z))
    }
})()
