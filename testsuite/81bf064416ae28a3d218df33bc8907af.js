load("201224b0d1c296b45befd2285e95dd42.js");
function testMethodInit() {
    function o() {}
    function k() {
        for (i = 0; i < this.depth; ++i) {}
    }
    for (var i = 0; i < 10; i++)
        (i) = {o: o, k: k};
}
testMethodInit();
