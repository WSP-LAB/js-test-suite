load("201224b0d1c296b45befd2285e95dd42.js");
gczeal(2);
try {
    DoWhile_3();
} catch (e) {}
function f() {
    test();
    yield 170;
}
function test() {
    function foopy() {
        try {
            for (var i in f());
        } catch (e) {}
    }
    foopy();
    gc();
}
test();
