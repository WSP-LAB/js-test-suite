load("201224b0d1c296b45befd2285e95dd42.js");
function a(f, i) {
    results = []
    for (var k = 0; k < 10; ++k) {
        gc();
        try {
            results.push(f(i[k]));
        } catch (e) {
            results.push(e);
        }
    }
}
g = (function(x, y) {
    return Math.fround((x ? Math.f : m0) ? w : Math.fround())
})
a(g, [Number.MAX_VALUE])
