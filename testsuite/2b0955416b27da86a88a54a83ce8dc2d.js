load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:98; need-for-each
function foo() {
    function gen() {
        try {
            yield 1;
        } finally {
            throw 98;
        }
    }
    for (i in gen()) {
        for each (var i in this)
            return false;
    }
}
foo();
