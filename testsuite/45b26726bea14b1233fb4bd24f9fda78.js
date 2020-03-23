load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

function g() {
    function f(a) {
        delete a.x;
    }
    for each(let w in [Infinity, String()]) {
        let i = f(w);
    }
}
g();
