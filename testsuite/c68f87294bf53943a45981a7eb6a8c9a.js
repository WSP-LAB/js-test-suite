load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

(function() {
    function f(l) {
        w++
    }
    for each(let w in ['', '', 0]) {
        try {
            f(w)
        } catch (e) {}
    }
})()
