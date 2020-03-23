load("201224b0d1c296b45befd2285e95dd42.js");
function testMethodSet() {  // bug 503198
    function o() { return 'o'; }
    function k() { return 'k'; }

    var x;
    for (var i = 0; i < 10; i++) {
        x = {};
        x.o = o;
        x.k = k;
    }
    return x.o() + x.k();
}
assertEq(testMethodSet(), "ok");
