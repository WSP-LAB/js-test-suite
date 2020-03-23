load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: closing generator
var finally3;
function gen() {
    try {
        try {
            yield 1;
        } finally {
            finally3();
        }
    } catch (e) {
        yield finally3 === parseInt;
    }
}
iter = gen();
iter.next();
iter.close();
